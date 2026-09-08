const { chromium } = require('playwright');
const fs = require('node:fs');
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 const results=[];
 for(const [width,height] of [[390,844],[768,1024],[1280,800],[1440,900]]){
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:5175/',{waitUntil:'networkidle'});
  await page.screenshot({path:`artifacts/screenshots/before-${width}.png`,fullPage:true});
  results.push({width,height,errors,...await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,viewport:innerWidth,headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>({level:e.tagName,text:e.innerText})),heroHeight:document.querySelector('#top').getBoundingClientRect().height}))});
  await page.close();
 }
 fs.writeFileSync('artifacts/before-checks.json',JSON.stringify(results,null,2));
 await browser.close();console.log(JSON.stringify(results));
})();
