# TestWell 디자인 기준

현재 기준은 [V3 디자인](docs/DESIGN_V3.md)이다. 이전 문서의 다크 연속 면·크림 카드 등 서로 충돌하던 지침을 이 문서로 대체한다.

- 방향: 절제된 검사 시스템. 검정 Hero, 크림 제작 안내, 얇은 선과 실제 메뉴 관계.
- 목적: 신규 방문자에게 서비스 역할과 실제 출발점 안내.
- 화면 문구: src/constants/content.ts. 목적지: src/constants/links.ts.
- 본문 최소14px, h1 하나, 키보드 포커스, reduced motion 유지.
- 제품 화면을 확인하지 못하면 설명 도식을 사용하고 실제 UI인 것처럼 꾸미지 않는다.
- 검사품질·자동분석을 보장하지 않는다. 검색창과 정적 상품목록은 추가하지 않는다.

근거와 검증: docs/CURRENT_STATE_AUDIT.md, docs/REFERENCE_AUDIT.md, docs/CLAIMS_AND_LINKS_AUDIT.md, artifacts/after-checks.json.

디자인과 정보구조는 확정 상태다. 제작 안내 안의 MeasurementContext는 “문항을 준비하기 전에 / 검사의 목적에 맞게 문항을 구성하세요”라는 짧은 하위 안내다. 이후 작업은 정합성 갱신에 한정하며, 배포 준비 여부는 docs/DEPLOYMENT_BLOCKERS.md를 따른다.

## 배포 전 최종 문구 기준

- Hero 설명: TestWell은 심리검사와 학습평가를 위한 온라인 플랫폼입니다. 검사 제작·운영자는 문항과 검사지를 준비하고, 참여자는 검사에 응답하고 결과를 확인합니다.
- 제작 버튼: **검사 만들기** → `https://testwell.kr/q_bank/question`
- 버튼 안내: 로그인 후 질문 관리에서 시작하세요.
- ProductFlow 캡션: 문항을 모아 검사지를 구성하고, 참여할 사람은 그룹으로 관리할 수 있습니다. 필요한 작업부터 시작하세요.
- 문항 준비 안내 제목: 검사의 목적에 맞게 문항을 구성하세요
- 문항 준비 안내 본문: 확인하려는 내용에 따라 필요한 문항이 달라집니다. 검사 목적을 먼저 정하고, 그 목적에 맞는 질문과 문제를 준비해 보세요.
- 탐색 버튼: **공식 서비스에서 둘러보기** → `https://testwell.kr/` (루트 배포 차단 항목)
