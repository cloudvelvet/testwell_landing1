const { chromium } = require('playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const { content, links, sourceHashes, snapshot, sha256 } = require('./current-source.cjs');
// 브라우저 크기별 렌더링과 실제 키보드 경로를 확인한다.
(async () => {
 const browser = await chromium.launch({headless:true, ...(process.env.PLAYWRIGHT_EXECUTABLE_PATH ? {executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH} : {})});
 fs.mkdirSync('output/verification/screenshots', {recursive:true});
 const results=[];
 for(const [width,height] of [[320,740],[360,800],[390,844],[768,1024],[1024,900],[1280,800],[1440,900]]) {
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1,reducedMotion:'reduce'});
  const errors=[]; page.on('pageerror',e=>errors.push(e.message)); page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto(process.env.CHECK_URL || 'http://127.0.0.1:5175/',{waitUntil:'networkidle'});
  await page.evaluate(() => document.fonts.ready);
  assert.ok(await page.evaluate(() => [...document.fonts].some(font => font.family.includes('Pretendard') && font.status === 'loaded')), '한국어 폰트 로드');
  assert.equal(await page.locator('.hero-description').innerText(), snapshot.heroDescription, 'Hero 문구 불일치');
  assert.equal(await page.locator('.creator-entry .primary-link').innerText(), snapshot.primaryLabel, '버튼 문구 불일치');
  assert.equal(await page.locator('.creator-entry .primary-link').getAttribute('href'), snapshot.primaryHref, '버튼 목적지 불일치');
  assert.equal(await page.locator('#create-note').innerText(), snapshot.creationNote);
  assert.deepEqual(await page.locator('.capability-circle span').allTextContents(), [...content.capabilities.displayItems]);
  assert.equal(await page.locator('#history-title').innerText(), snapshot.historyTitle);
  assert.deepEqual(await page.locator('.history-row dt').allTextContents(), content.history.entries.map(item => item.year));
  assert.equal(await page.locator('#measurement-title').count(), 0);
  assert.equal(await page.locator('.result-entry-button').count(),0);
  const buttonColors=await page.locator('.hero-action-grid .primary-link').evaluateAll(nodes=>nodes.map(e=>getComputedStyle(e).backgroundColor));
  assert.deepEqual(buttonColors,['rgb(233, 178, 10)','rgb(233, 178, 10)']);
  const expectedLinks = [
    ...content.header.nav.map(item => [item.label, links[item.link]]),
    [content.header.login, links.login], [content.hero.primary, links.questionBank],
    [content.hero.browse, links.browseTests],
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
  for (const circle of await page.locator('.capability-circle').all()) {
    const box=await circle.boundingBox();assert.ok(box.width>0 && box.x>=0 && box.x+box.width<=width,`기능 카드 넘침: ${width}px`);
  }
  assert.equal(state.scrollWidth,width,'가로 넘침'); assert.equal(state.headings.filter(h=>h.level===1).length,1,'h1 개수');
  assert.ok(state.headings.every((h,i)=>i===0||h.level<=state.headings[i-1].level+1),'제목 단계');
  assert.deepEqual(state.brokenAnchors,[]);assert.deepEqual(state.smallText,[]);assert.equal(state.inaccessibleSvg,0);assert.equal(state.imagesWithoutAlt,0);assert.ok(state.reduce);
  assert.equal(await page.locator('input[type="search"]').count(),0,'검색창 제거');
  assert.equal(await page.locator('#top a').count(),2,'Hero 외부 링크는 두 개');
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
  const ticketButton=page.getByRole('button',{name:content.hero.ticket,exact:true});
  await ticketButton.click();
  const code=page.getByLabel(content.ticketForm.label,{exact:true});
  assert.ok(await code.evaluate(e=>e===document.activeElement));
  await page.getByRole('button',{name:content.ticketForm.submit,exact:true}).click();
  assert.equal(await page.getByRole('alert').innerText(),content.ticketForm.emptyError);
  assert.equal(await code.getAttribute('aria-invalid'),'true');
  await code.fill('   ');
  await page.getByRole('button',{name:content.ticketForm.submit,exact:true}).click();
  assert.equal(await page.getByRole('alert').innerText(),content.ticketForm.emptyError);
  assert.equal(await code.getAttribute('aria-invalid'),'true');
  await code.fill('..');
  await page.getByRole('button',{name:content.ticketForm.submit,exact:true}).click();
  assert.equal(await page.getByRole('alert').innerText(),content.ticketForm.invalidError);
  await code.fill('sample');assert.equal(await code.getAttribute('aria-invalid'),'false');
  assert.equal(await page.getByRole('alert').count(),0);
  await code.press('Escape');assert.equal(await ticketButton.getAttribute('aria-expanded'),'false');
  assert.ok(await ticketButton.evaluate(e=>e===document.activeElement));
  await ticketButton.click();
  // Intercept navigation: never redeem a ticket or contact the live service.
  let destination;
  await page.route('https://testwell.kr/**',route=>{destination=route.request().url();return route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>Intercepted test navigation</title>'});});
  await code.fill('  sample/가?x#%  ');
  await Promise.all([page.waitForURL(url=>url.href.startsWith(links.testByTicket)), page.getByRole('button',{name:content.ticketForm.submit,exact:true}).click()]);
  assert.equal(destination,links.testByTicket+encodeURIComponent('sample/가?x#%'));
  await page.goto(process.env.CHECK_URL || 'http://127.0.0.1:5175/',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:content.hero.ticket,exact:true}).click();
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width);
  await ticketButton.click();
  await page.keyboard.press('Tab');
  await page.locator('.creator-entry .primary-link').focus();
  const focus=await page.locator('.creator-entry .primary-link').evaluate(e=>({style:getComputedStyle(e).outlineStyle,width:getComputedStyle(e).outlineWidth}));
  assert.equal(focus.style,'solid');assert.equal(focus.width,'3px');
  await page.evaluate(()=>{document.activeElement.blur();scrollTo(0,0);});
  await page.screenshot({path:`output/verification/screenshots/after-${width}.png`,fullPage:true});
  await page.screenshot({path:`output/verification/screenshots/hero-${width}.png`});
  assert.deepEqual(errors,[],'콘솔 오류'); results.push({...state,height,errors,keyboard:'통과',focus,copy:snapshot,metadata:meta,screenshots:['after','hero'].map(kind => { const file=`output/verification/screenshots/${kind}-${width}.png`;return {file,sha256:sha256(file)}; })});await page.close();
 }
 // 다크/밝은 면에 실제 사용하는 본문·버튼·포커스 색 대비.
 const luminance=h=>{const n=h.replace('#','').match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return n[0]*.2126+n[1]*.7152+n[2]*.0722;};
 const contrast=[];
 for(const [fg,bg] of [['#ffffff','#111111'],['#c6c6c6','#111111'],['#b8b8b8','#111111'],['#111111','#e9b20a'],['#55554f','#f6f2ea'],['#656159','#f6f2ea'],['#656159','#ede7db'],['#253858','#f6f2ea'],['#ffb4a9','#111111']]) {const a=luminance(fg),b=luminance(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);assert.ok(ratio>=4.5);contrast.push({fg,bg,ratio:+ratio.toFixed(2)});}
 fs.writeFileSync('output/verification/after-checks.json',JSON.stringify({date:new Date().toISOString(),sourceHashes,results,contrast},null,2));
 await browser.close();console.log(JSON.stringify({result:'통과',viewports:results.map(r=>({width:r.width,heroHeight:r.heroHeight})),contrast}));
})().catch(e=>{console.error(e);process.exit(1);});
