const { chromium } = require('playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const { content, links, sourceHashes, snapshot, sha256 } = require('./current-source.cjs');
// 브라우저 크기별 렌더링과 실제 키보드 경로를 확인한다.
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 const results=[];
 for(const [width,height] of [[390,844],[768,1024],[1280,800],[1440,900]]) {
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1,reducedMotion:'reduce'});
  const errors=[]; page.on('pageerror',e=>errors.push(e.message)); page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto('http://127.0.0.1:5175/',{waitUntil:'networkidle'});
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator('.hero-description').innerText(), snapshot.heroDescription, 'Hero 문구 불일치');
  assert.equal(await page.locator('.primary-link').innerText(), snapshot.primaryLabel, '버튼 문구 불일치');
  assert.equal(await page.locator('.primary-link').getAttribute('href'), snapshot.primaryHref, '버튼 목적지 불일치');
  assert.equal(await page.locator('#create-note').innerText(), snapshot.creationNote);
  assert.equal(await page.locator('.product-flow figcaption').innerText(), snapshot.figureCaption);
  assert.equal(await page.locator('#measurement-title').innerText(), snapshot.measurementTitle);
  assert.equal(await page.locator('.measurement .section-description').innerText(), snapshot.measurementDescription);
  const expectedLinks = [
    ...content.header.nav.map(item => [item.label, links[item.link]]),
    [content.header.login, links.login], [content.hero.primary, links.questionBank],
    [content.participant.action, links.myTests],
    ...content.capabilities.items.map(item => [item.action, links[item.link]]),
    ...content.finalCta.links.map(item => [item.title + ' ' + item.action, links[item.link]]),
    ...content.footer.links.map(item => [item.label, links[item.link]]),
  ];
  for (const [label, href] of expectedLinks) {
    const matches = await page.getByRole('link', {name: label, exact: true, includeHidden: true}).all();
    assert.ok(matches.length > 0, `링크 누락: ${label}`);
    for (const link of matches) assert.equal(await link.getAttribute('href'), href, `링크 불일치: ${label}`);
  }
  const meta = await page.evaluate(() => ({title:document.title, description:document.querySelector('meta[name="description"]').content, ogTitle:document.querySelector('meta[property="og:title"]').content, ogDescription:document.querySelector('meta[property="og:description"]').content, ogType:document.querySelector('meta[property="og:type"]').content, canonical:document.querySelector('link[rel="canonical"]')?.href ?? null, ogImage:document.querySelector('meta[property="og:image"]')?.content ?? null}));
  assert.equal(meta.ogTitle, meta.title);assert.equal(meta.ogDescription, meta.description);assert.equal(meta.ogType,'website');assert.equal(meta.canonical,null);assert.equal(meta.ogImage,null);
  const state=await page.evaluate(()=>{
   const visible=e=>Boolean(e.getClientRects().length);
   const headings=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(e=>({level:Number(e.tagName[1]),text:e.innerText}));
   const brokenAnchors=[...document.querySelectorAll('a[href^="#"]')].filter(e=>!document.getElementById(e.hash.slice(1))).map(e=>e.hash);
   const smallText=[...document.querySelectorAll('p,a,dt,dd,h1,h2,h3,figcaption,span')].filter(e=>visible(e)&&parseFloat(getComputedStyle(e).fontSize)<14).map(e=>e.textContent);
   const inaccessibleSvg=[...document.querySelectorAll('svg')].filter(e=>e.getAttribute('aria-hidden')!=='true'&&!e.getAttribute('aria-label')).length;
   const imagesWithoutAlt=[...document.querySelectorAll('img')].filter(e=>!e.hasAttribute('alt')).length;
   const links=[...document.querySelectorAll('a')].map(e=>({label:e.textContent.trim(),href:e.getAttribute('href')}));
   return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,heroHeight:document.querySelector('#top').getBoundingClientRect().height,headings,brokenAnchors,smallText,inaccessibleSvg,imagesWithoutAlt,links,reduce:matchMedia('(prefers-reduced-motion: reduce)').matches};
  });
  assert.equal(state.scrollWidth,width,'가로 넘침'); assert.equal(state.headings.filter(h=>h.level===1).length,1,'h1 개수');
  assert.ok(state.headings.every((h,i)=>i===0||h.level<=state.headings[i-1].level+1),'제목 단계');
  assert.deepEqual(state.brokenAnchors,[]);assert.deepEqual(state.smallText,[]);assert.equal(state.inaccessibleSvg,0);assert.equal(state.imagesWithoutAlt,0);assert.ok(state.reduce);
  assert.equal(await page.locator('input[type="search"]').count(),0,'이전 검색창');
  assert.equal(await page.locator('#top a').count(),2,'Hero CTA는 두 개');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(()=>document.activeElement.textContent),'본문으로 건너뛰기');
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(()=>document.activeElement.id),'main-content');
  if(width<1024) {
    const button=page.getByRole('button',{name:'메뉴 열기'});await button.focus();await page.keyboard.press('Enter');
    assert.equal(await page.getByRole('button',{name:'메뉴 닫기'}).getAttribute('aria-expanded'),'true');
    await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.textContent),'이용 안내');
    await page.keyboard.press('Escape');assert.equal(await button.getAttribute('aria-expanded'),'false');assert.ok(await button.evaluate(e=>e===document.activeElement));
    await button.click();await page.getByRole('navigation',{name:'모바일 메뉴'}).getByRole('link',{name:'이용 안내'}).click();assert.equal(await button.getAttribute('aria-expanded'),'false');
    await button.click();const menuBox=await page.locator('#mobile-navigation').boundingBox();await page.mouse.click(10,menuBox.y+menuBox.height+16);assert.equal(await button.getAttribute('aria-expanded'),'false');
    await button.click();await page.setViewportSize({width:1280,height:800});await page.waitForFunction(()=>document.querySelector('.menu-trigger').getAttribute('aria-expanded')==='false');await page.setViewportSize({width,height});
    await button.click();for(let i=0;i<5;i++)await page.keyboard.press('Tab');assert.equal(await button.getAttribute('aria-expanded'),'false','포커스 이탈 닫기');
  }
  await page.locator('.primary-link').focus();
  const focus=await page.locator('.primary-link').evaluate(e=>({style:getComputedStyle(e).outlineStyle,width:getComputedStyle(e).outlineWidth}));
  assert.equal(focus.style,'solid');assert.equal(focus.width,'3px');
  await page.evaluate(()=>{document.activeElement.blur();scrollTo(0,0);});
  await page.screenshot({path:`artifacts/screenshots/after-${width}.png`,fullPage:true});
  await page.screenshot({path:`artifacts/screenshots/hero-${width}.png`});
  assert.deepEqual(errors,[],'콘솔 오류'); results.push({...state,height,errors,keyboard:'통과',focus,copy:snapshot,metadata:meta,screenshots:['after','hero'].map(kind => { const file=`artifacts/screenshots/${kind}-${width}.png`;return {file,sha256:sha256(file)}; })});await page.close();
 }
 // 다크/밝은 면에 실제 사용하는 본문·버튼·포커스 색 대비.
 const luminance=h=>{const n=h.replace('#','').match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return n[0]*.2126+n[1]*.7152+n[2]*.0722;};
 const contrast=[];
 for(const [fg,bg] of [['#ffffff','#111111'],['#c6c6c6','#111111'],['#b8b8b8','#111111'],['#111111','#e9b20a'],['#55554f','#f6f2ea'],['#656159','#f6f2ea'],['#656159','#ede7db'],['#253858','#f6f2ea']]) {const a=luminance(fg),b=luminance(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);assert.ok(ratio>=4.5);contrast.push({fg,bg,ratio:+ratio.toFixed(2)});}
 fs.writeFileSync('artifacts/after-checks.json',JSON.stringify({date:new Date().toISOString(),sourceHashes,results,contrast},null,2));
 await browser.close();console.log(JSON.stringify({result:'통과',viewports:results.map(r=>({width:r.width,heroHeight:r.heroHeight})),contrast}));
})().catch(e=>{console.error(e);process.exit(1);});
