const fs = require('node:fs');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { sourceHashes, snapshot, sha256 } = require('./current-source.cjs');

// Only fresh checks are evidence for the current tree; old artifacts are history.
const report = JSON.parse(fs.readFileSync('output/verification/after-checks.json', 'utf8'));
assert.deepEqual(report.sourceHashes, sourceHashes, '검사 이후 소스 변경');
assert.deepEqual(report.results.map(r => r.width), [320, 360, 390, 768, 1024, 1280, 1440]);
for (const result of report.results) {
  assert.deepEqual(result.copy, snapshot);
  assert.deepEqual(result.errors, []);
  for (const screenshot of result.screenshots) assert.equal(sha256(screenshot.file), screenshot.sha256, '캡처 변경');
}
execFileSync('git', ['diff', '--check']);
fs.writeFileSync('output/verification/validation-summary.json', JSON.stringify({
  checkedAt: new Date().toISOString(), sourceHashes,
  browser: { status: 'passed', widths: report.results.map(r => r.width) },
  consistency: 'passed',
  productionDeployment: { status: 'blocked', document: 'docs/DEPLOYMENT_BLOCKERS.md' },
  notVerified: ['운영 서버 배포', '인증 후 검사·결과 접근', '실제 응시권 사용'],
}, null, 2));
console.log('현재 소스·7개 화면·캡처 정합성 확인 완료.');
