# TestWell 수정·검증 안내

## 작업 기준

작업 브랜치: codex/landing-v3-reference-led. 기준 main: 4e32690. 기존 로컬 폴더의 미커밋 수정은 별도로 보존되어 있다.

## 문구와 링크

모든 페이지 문구는 src/constants/content.ts, 실제 목적지는 src/constants/links.ts에서 관리한다. 문구 항목의 link 키가 LINKS의 실제 키와 연결된다. 없는 앵커나 추측한 외부 경로를 추가하지 않는다.

Hero, ParticipantEntry, WhatIsTestWell, ProductFlow, MeasurementContext, FinalCTA, Footer는 App에서 조립된다. 스타일은 src/index.css와 기존 tailwind.config.js 토큰을 따른다. 기준 문서는 docs/DESIGN_V3.md다.

## 실행

```powershell
npm ci
npm run dev -- --host 127.0.0.1 --port 5175 --strictPort
npm run build
npm run doctor
```

화면은 http://127.0.0.1:5175/ 에서 확인한다. 같은 컴퓨터에서 기존 5173 개발서버가 열려 있어도 새 작업 폴더는 5175로 구분된다.

## 브라우저 검사

scripts/check-browser.cjs는 Playwright와 Chrome이 있는 환경에서 실행한다. 이 작업에서는 Codex 번들의 Playwright를 NODE_PATH로 지정해 사용했다. 프로젝트 런타임 의존성은 추가하지 않았다.

```powershell
node scripts/check-browser.cjs
```

기본 주소5175, 결과 artifacts/after-checks.json, 캡처 artifacts/screenshots. capture-before.cjs는 변경 전 전용이므로 V3에서 다시 실행하면 기준 캡처를 덮어쓴다. 기존 캡처는 보존한다.

## 확인 범위

링크의 로그인 리디렉션은 기능 수행 검증이 아니다. 검사 데이터를 저장·배포·구매하는 테스트와 실제 이용자 테스트는 별도로 수행해야 한다. 이 작업은 로컬 브랜치 커밋까지이며 main 병합·배포는 포함하지 않는다.
