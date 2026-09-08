const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const Module = require('node:module');
const ts = require('typescript');
// 현재 저장소 상수를 읽어 검사 기대값과 산출물 출처를 함께 기록한다.
function readExports(relativePath) {
  const filename = path.resolve(relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const local = new Module(filename, module);
  local.filename = filename;
  local.paths = Module._nodeModulePaths(path.dirname(filename));
  local._compile(output, filename);
  return local.exports;
}
const content = readExports('src/constants/content.ts').SITE_CONTENT;
const links = readExports('src/constants/links.ts').LINKS;
function sha256(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }
const sourceHashes = Object.fromEntries(['src/constants/content.ts','src/constants/links.ts','src/index.css','src/App.tsx','src/components/MeasurementContext.tsx','index.html'].map(file => [file, sha256(file)]));
const snapshot = {
  heroDescription: content.hero.description, primaryLabel: content.hero.primary, primaryHref: links.questionBank,
  creationNote: content.hero.note, figureCaption: content.capabilities.figureCaption,
  measurementTitle: content.measurement.title, measurementDescription: content.measurement.description,
  browseLabel: content.finalCta.links.find(item => item.link === 'browseTests').action, browseHref: links.browseTests,
};
module.exports = { content, links, sourceHashes, snapshot, sha256 };
