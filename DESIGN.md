# TestWell 디자인 기준

현재 기준은 [V3 디자인](docs/DESIGN_V3.md)이다. 이전 문서의 다크 연속 면·크림 카드 등 서로 충돌하던 지침을 이 문서로 대체한다.

- 방향: 절제된 검사 시스템. 검정 Hero, 크림 제작 안내, 얇은 선과 실제 메뉴 관계.
- 목적: 신규 방문자에게 서비스 역할과 실제 출발점 안내.
- 화면 문구: src/constants/content.ts. 목적지: src/constants/links.ts.
- 본문 최소14px, h1 하나, 키보드 포커스, reduced motion 유지.
- 제품 화면을 확인하지 못하면 설명 도식을 사용하고 실제 UI인 것처럼 꾸미지 않는다.
- 검사품질·자동분석을 보장하지 않는다. 검색창과 정적 상품목록은 추가하지 않는다.

근거와 검증: docs/CURRENT_STATE_AUDIT.md, docs/REFERENCE_AUDIT.md, docs/CLAIMS_AND_LINKS_AUDIT.md, artifacts/after-checks.json.
