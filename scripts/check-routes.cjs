const { chromium } = require('playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
// 로그인은 제출하지 않고 실제 CTA가 보존하는 목적지만 확인한다.
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});const results=[];
 for(const [label,path,mobile] of [['검사 만들기','/q_bank/question',false],['내 검사 확인','/survey/inventory',true],['결과 확인','/survey/my_status',true]]){
  const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1280,height:800}});
  await page.goto('http://127.0.0.1:5175/',{waitUntil:'networkidle'});
  if(label==='결과 확인')await page.getByRole('button',{name:'메뉴 열기'}).click();
  await Promise.all([page.waitForURL('https://testwell.kr/authority/login?**'),page.getByRole('link',{name:label,exact:true}).filter({visible:true}).click()]);
  const url=new URL(page.url());assert.equal(url.searchParams.get('next'),path);
  results.push({label,viewport:mobile?'390':'1280',clicks:label==='결과 확인'?2:1,finalUrl:page.url(),loginSubmitted:false});await page.close();
 }
 await browser.close();fs.writeFileSync('artifacts/route-checks.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));
})().catch(e=>{console.error(e);process.exit(1)});
