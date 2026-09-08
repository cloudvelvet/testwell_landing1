# TestWell 수정·검증 안내

## 작업 기준

작업 브랜치: codex/landing-v3-reference-led. 기준 main: 4e32690. 기존 로컬 폴더의 미커밋 수정은 별도로 보존되어 있다.

## 문구와 링크

모든 페이지 문구는 src/constants/content.ts, 실제 목적지는 src/constants/links.ts에서 관리한다. 문구 항목의 link 키가 LINKS의 실제 키와 연결된다. 없는 앵커나 추측한 외부 경로를 추가하지 않는다.

App은 Header, Hero, WhatIsTestWell, FinalCTA, Footer를 조립한다. ParticipantEntry는 Hero 안에, ProductFlow와 MeasurementContext는 WhatIsTestWell 안에 있다. 스타일은 src/index.css와 기존 tailwind.config.js 토큰을 따른다. 기준 문서는 docs/DESIGN_V3.md다.

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

## 배포 차단

공식 루트 배포는 docs/DEPLOYMENT_BLOCKERS.md의 미결 항목이 해소될 때까지 차단한다. 검사 탐색의 새 URL이 미확정이므로 canonical·og:url·og:image를 추측해 추가하지 않는다. Open Graph의 title·description·type만 설정했다.

## 배포 전 최종 문구 기준

- Hero 설명: TestWell은 심리검사와 학습평가를 위한 온라인 플랫폼입니다. 검사 제작·운영자는 문항과 검사지를 준비하고, 참여자는 검사에 응답하고 결과를 확인합니다.
- 제작 버튼: **검사 만들기** → `https://testwell.kr/q_bank/question`
- 버튼 안내: 로그인 후 질문 관리에서 시작하세요.
- ProductFlow 캡션: 문항을 모아 검사지를 구성하고, 참여할 사람은 그룹으로 관리할 수 있습니다. 필요한 작업부터 시작하세요.
- 문항 준비 안내 제목: 이 검사로 무엇을 알고 싶나요?
- 문항 준비 안내 본문: 태도나 경험을 묻는 문항과 지식이나 수행을 확인하는 문제는 측정하려는 내용과 결과 해석 방식이 다릅니다. 먼저 무엇을 알아보려는지 정하고, 목적에 맞는 문항과 해석 기준을 준비하세요.
- 탐색 버튼: **공식 서비스에서 둘러보기** → `https://testwell.kr/` (루트 배포 차단 항목)

## 정합성 산출물 갱신 순서

개발서버를 실행한 뒤 `node scripts/check-browser.cjs`, `node scripts/check-routes.cjs`, `node scripts/check-consistency.cjs` 순서로 실행한다. 마지막 검사는 command-checks.json에 실제 명령 실행 결과를 기록한 후 수행한다. 이 파일은 통과 결과를 가정하는 설정이 아니라 실행 증거 기록이다. 소스를 바꾸면 after/route 검사를 다시 실행해야 한다. 이전 감사용 before·reference 자료는 현재 구현과의 비교 대상이 아니다.

current-source.cjs는 저장소의 TypeScript 상수를 읽어 기대 문구와 소스 지문을 만든다. 브라우저 JSON과 캡처 지문, 문서의 최종 인용이 다르면 정합성 검사가 실패한다. 스타일·구조·링크가 확정 커밋2401236에서 바뀌어도 실패한다. 디자인 변경이 승인되면 그때 기준을 명시적으로 갱신해야 한다.
