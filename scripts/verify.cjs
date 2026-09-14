const { spawn, spawnSync } = require('node:child_process');
const path = require('node:path');

// Verify the built page on an available port, then stop the server even on failure.
const server = spawn(process.execPath, [path.join(path.dirname(require.resolve('vite/package.json')), 'bin/vite.js'), 'preview', '--host', '127.0.0.1', '--port', '0'], { stdio: ['ignore', 'pipe', 'inherit'] });
let started = false;
let output = '';
const timeout = setTimeout(() => { console.error('미리보기 서버 시작 시간 초과'); server.kill(); process.exitCode = 1; }, 15000);
server.on('error', error => { clearTimeout(timeout); console.error(error); process.exitCode = 1; });
server.on('exit', () => { if (!started) { clearTimeout(timeout); process.exitCode = 1; } });
server.stdout.on('data', chunk => {
  output += chunk.toString().replace(/\x1b\[[0-9;]*m/g, '');
  const match = output.match(/http:\/\/127\.0\.0\.1:\d+\//);
  if (!match || started) return;
  started = true;
  clearTimeout(timeout);
  const check = spawn(process.execPath, [path.join(__dirname, 'check-browser.cjs')], { stdio: 'inherit', env: { ...process.env, CHECK_URL: match[0] } });
  check.on('error', error => { console.error(error); server.kill(); process.exitCode = 1; });
  check.on('exit', code => {
    server.kill();
    process.exitCode = code === 0 ? (spawnSync(process.execPath, [path.join(__dirname, 'check-consistency.cjs')], {stdio:'inherit'}).status ?? 1) : (code ?? 1);
  });
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => { check.kill(); server.kill(); process.exitCode = 1; });
});
