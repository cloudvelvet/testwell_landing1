const fs = require('node:fs');
const assert = require('node:assert/strict');
const { execFileSync, spawnSync } = require('node:child_process');
const { content, links, sourceHashes, snapshot, sha256 } = require('./current-source.cjs');
// 현재 문구·목적지·캡처 지문을 대조한다. 변경 전 감사 자료는 비교 대상에서 제외한다.
const after = JSON.parse(fs.readFileSync('artifacts/after-checks.json','utf8'));
const routes = JSON.parse(fs.readFileSync('artifacts/route-checks.json','utf8'));
const commands = JSON.parse(fs.readFileSync('artifacts/command-checks.json','utf8'));
assert.deepEqual(after.sourceHashes, sourceHashes, '검사 이후 소스 변경');
assert.equal(after.results.length,4);
const screenshots=[];
for (const result of after.results) {
  assert.deepEqual(result.copy,snapshot,'화면별 문구 불일치');
  assert.deepEqual(result.errors,[]);
  assert.ok(result.links.some(link=>link.label===snapshot.primaryLabel&&link.href===snapshot.primaryHref));
  assert.ok(result.links.some(link=>link.label.includes(snapshot.browseLabel)&&link.href===snapshot.browseHref));
  for (const screenshot of result.screenshots) { assert.equal(sha256(screenshot.file),screenshot.sha256,'캡처 지문 불일치');screenshots.push(screenshot); }
}
assert.equal(screenshots.length,8);
const expectedRoutes = [[content.hero.primary,links.questionBank],[content.participant.action,links.myTests],[content.header.nav.find(item=>item.link==='result').label,links.result]];
assert.equal(routes.length,3);
for (const [label,href] of expectedRoutes) {
  const route=routes.find(item=>item.label===label);assert.ok(route);assert.equal(route.requestedUrl,href);
  assert.equal(new URL(route.finalUrl).searchParams.get('next'),new URL(href).pathname);assert.deepEqual(route.sourceHashes,sourceHashes);
}
const docs=['docs/CLAIMS_AND_LINKS_AUDIT.md','docs/TESTWELL_POSITIONING.md','docs/PROFESSOR_BRIEF.md','docs/IMPLEMENTATION_CHANGELOG.md','DESIGN.md','HOW_TO_EDIT.md'];
const oldCopy=['문항 관리에서 시작','점수에는 해석의 기준이 필요합니다','이 안내는 검사 결과를 이해하기 위한 일반 원칙이며, TestWell의 자동 분석이나 검사 품질 보증을 뜻하지 않습니다.','얼마나 자신 있는지 묻는 질문과'];
for (const file of docs) {
  const text=fs.readFileSync(file,'utf8');
  for(const value of Object.values(snapshot))assert.ok(text.includes(value),`${file}: 현재 문구/링크 누락 ${value}`);
  for(const old of oldCopy)assert.ok(!text.includes(old),`${file}: 이전 문구 잔존`);
}
for(const file of ['src/constants/content.ts','artifacts/after-checks.json','artifacts/route-checks.json']) {
  const text=fs.readFileSync(file,'utf8');for(const old of oldCopy)assert.ok(!text.includes(old),`${file}: 이전 문구 잔존`);
}
const html=fs.readFileSync('index.html','utf8');
for(const key of ['og:title','og:description','og:type'])assert.ok(html.includes(`property="${key}"`));
assert.ok(!html.includes('rel="canonical"'));assert.ok(!html.includes('property="og:image"'));assert.ok(!html.includes('property="og:url"'));
for(const command of ['npm ci','npm run build','npm run doctor']) assert.equal(commands.final[command].exitCode,0);
assert.equal(commands.final['npm run doctor'].score,100);
const branch=execFileSync('git',['branch','--show-current'],{encoding:'utf8'}).trim();assert.equal(branch,'codex/landing-v3-reference-led');
const design=spawnSync('git',['diff','--quiet','2401236','--','src/components','src/index.css','src/App.tsx','tailwind.config.js','src/constants/links.ts']);assert.equal(design.status,0,'확정된 디자인/구조/링크 변경');
const diff=spawnSync('git',['diff','--check'],{encoding:'utf8'});assert.equal(diff.status,0,diff.stdout+diff.stderr);
const summary={
 checkedAt:new Date().toISOString(),branch,verificationBaseCommit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),
 sourceHashes,currentCopy:snapshot,designAndStructure:'변경 없음',commands,
 browser:{status:'통과',artifact:'artifacts/after-checks.json',sha256:sha256('artifacts/after-checks.json'),viewports:after.results.map(r=>({width:r.width,height:r.height}))},
 routes:{status:'통과',artifact:'artifacts/route-checks.json',sha256:sha256('artifacts/route-checks.json'),count:routes.length,scope:'인증 제출 없이 로그인 게이트와 next 보존까지'},
 consistency:{status:'통과',documents:docs,screenshots,method:'소스 기대값과 렌더링 문구·링크 대조 후 캡처; 캡처 파일 SHA-256 대조',historicalExclusions:['artifacts/before-checks.json','artifacts/screenshots/before-*.png','artifacts/screenshots/reference-*.png','artifacts/link-audit.json']},
 metadata:{openGraph:['title','description','type'],canonical:null,image:null,reason:'공개 배포 URL 및 이미지 미확정'},
 productionDeployment:{status:'blocked',document:'docs/DEPLOYMENT_BLOCKERS.md',reasons:['루트 탐색 링크 자기참조','검색·상품 목록의 새 경로 미확정','응시권 코드 검사·결과 진입 보존 미결','인증 후 next=/ 도착 화면 미검증','회사 정보 Footer 유지 여부 미결','기존 서버와 Vite 통합 방식 미결']},
 notVerified:['인증 후 실제 기능 수행','개별 검사 품질','신규 방문자 이해도','전체 WCAG 적합성','운영 배포'],
};
fs.writeFileSync('artifacts/validation-summary.json',JSON.stringify(summary,null,2));
console.log('정합성 검사 통과: 문서 6개, 현재 문구·링크, 화면 4종, 캡처 8장. 운영 루트 배포는 차단 상태.');
