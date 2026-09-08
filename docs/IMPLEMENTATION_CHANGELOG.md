# 구현 변경 기록 — 현재 확정본

브랜치: codex/landing-v3-reference-led. 배포 전 정합성 정리의 출발 커밋: 2401236. 이전 디자인 작업 이력은 Git에 보존한다.

## 확정된 구조

디자인과 정보구조를 변경하지 않았다. Header → Hero(ParticipantEntry 포함) → WhatIsTestWell(ProductFlow·MeasurementContext 포함) → FinalCTA → Footer 구조와 CSS·Tailwind 토큰을 유지한다. 주요 본문 영역은 세 개이며 문항 준비 안내는 하위 aside다.

## 이번 변경

- content.ts: 요청된 Hero 설명, ProductFlow 캡션, 문항 준비 안내 본문 세 문구 갱신.
- index.html: Open Graph title·description·type 추가. 공개 URL 미확정으로 canonical·og:url·og:image 미추가.
- 감사·포지셔닝·교수님 설명·디자인·수정 안내 문서의 이전 문구와 중복된 최종 설명을 현재 기준으로 정리.
- DEPLOYMENT_BLOCKERS.md: 루트 자기참조, 기존 검색·상품·응시권 코드 진입, next=/, 회사정보, 서버 통합 미결 기록.
- after-checks.json, route-checks.json, validation-summary.json과 after/hero 네 크기 캡처 재생성.
- 검사 스크립트에서 현재 소스의 문구·링크와 렌더링 결과를 대조하도록 보강하고 출처 지문을 기록.

## 유지 범위

페이지 배치·색·타이포그래피·컴포넌트 구조·메뉴·버튼 목적지 변경 없음. 신규 경로, 실제 제품 기능, 분석·검증·품질 보장, 서버·인증·결제 코드를 추가하지 않았다. 이전 before 캡처와 해외 참고 캡처는 당시 감사 기록으로 유지한다.

## 공개 기능과 일반 조언

제작·그룹·참여·결과 경로는 기존 공개 서비스에 근거한다. 문항 준비 안내는 목적과 해석 기준에 관한 일반 조언이다. 제품의 자동 분석 능력이나 개별 검사 품질을 주장하지 않는다.

## 검증 범위와 한계

최종 명령 결과와 소스 지문은 artifacts/validation-summary.json을 따른다. 브라우저 검사와 CTA 로그인 게이트 검사에 실제로 성공한 범위를 기록한다. 인증 후 작업 수행, 신규방문자 이해도, 개별 검사 품질, 전체 WCAG 적합성은 미확인이다. 공식 루트 배포는 DEPLOYMENT_BLOCKERS.md가 해소될 때까지 차단한다.

npm ci 최초 실행은 실행 중인 Vite의 esbuild.exe 점유로 실패했다. 해당 작업 폴더의 프로세스를 종료한 뒤 다시 실행했다. 이 기록을 설치 성공으로 덮어쓰지 않고 최종 결과와 구분한다.

## 배포 전 최종 문구 기준

- Hero 설명: TestWell은 심리검사와 학습평가를 위한 온라인 플랫폼입니다. 검사 제작·운영자는 문항과 검사지를 준비하고, 참여자는 검사에 응답하고 결과를 확인합니다.
- 제작 버튼: **검사 만들기** → `https://testwell.kr/q_bank/question`
- 버튼 안내: 로그인 후 질문 관리에서 시작하세요.
- ProductFlow 캡션: 문항을 모아 검사지를 구성하고, 참여할 사람은 그룹으로 관리할 수 있습니다. 필요한 작업부터 시작하세요.
- 문항 준비 안내 제목: 검사의 목적에 맞게 문항을 구성하세요
- 문항 준비 안내 본문: 확인하려는 내용에 따라 필요한 문항이 달라집니다. 검사 목적을 먼저 정하고, 그 목적에 맞는 질문과 문제를 준비해 보세요.
- 탐색 버튼: **공식 서비스에서 둘러보기** → `https://testwell.kr/` (루트 배포 차단 항목)
