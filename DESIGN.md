# TestWell Landing Prototype Design System

## 1. Atmosphere & Identity

TestWell 랜딩페이지는 별도 캠페인 사이트가 아니라 기존 `testwell.kr` 안에 자연스럽게 이어지는 서비스 안내 화면처럼 느껴져야 한다. SJGOD에서 참고한 따뜻한 크림 면·검정 본문·노랑 행동색을 기본으로 하고, 검정과 노랑의 대비를 전체 행동 흐름에 일관되게 쓴다. 장식보다 실제 기능과 시작 경로가 먼저 읽혀야 하며, 전문성은 별도 연구 발표처럼 보이지 않는 한두 문장으로만 드러낸다.

## 2. Color

### Palette

| 역할 | Tailwind token | 값 | 용도 |
|---|---|---:|---|
| Surface/primary | `brand-black` | `#111111` | 기본 다크 배경 |
| Surface/deep | `brand-black-deep` | `#0A0A0A` | 기능·푸터 배경 |
| Surface/subtle | `brand-black-subtle` | `#171717` | 보조 면 |
| Surface/card | `brand-black-card` | `#1E1E1E` | 시각화 카드 |
| Surface/light | `brand-light` | `#F6F2EA` | 설명 섹션 |
| Surface/light-secondary | `brand-light-gray` | `#EDE7DB` | 밝은 보조 면 |
| Text/on-dark | `brand-white` | `#FFFFFF` | 다크 배경의 제목·본문 |
| Text/muted | `brand-muted` | `#8E8E93` | 보조 정보 |
| Text/muted-dark | `brand-muted-dark` | `#636366` | 낮은 위계 정보 |
| Accent/primary | `brand-yellow` | `#E9B20A` | CTA, 링크, 핵심 단계 |
| Accent/hover | `brand-yellow-hover` | `#D49A00` | 노랑 CTA hover |
| Accent/secondary | `brand-orange` | `#FF8A00` | 강조 면의 보조색 |
| Accent/secondary-hover | `brand-orange-hover` | `#E67C00` | 주황 hover |
| Identity/navy | `brand-navy` | `#253858` | 로고, 제목, 기본 링크 |
| Identity/navy-hover | `brand-navy-hover` | `#182640` | 남색 hover |
| Action/coral | `brand-coral` | `#FF784B` | 기존 서비스와 연결되는 주요 CTA |
| Action/coral-hover | `brand-coral-hover` | `#E9653A` | 주황 CTA hover |

### Rules

- 검정은 정보 위계와 제목, 노랑은 실제 서비스로 이동하는 CTA와 구획 번호에 사용한다.
- 밝은 면은 순백 대신 따뜻한 크림을 사용해 검정·노랑의 대비를 부드럽게 받친다.
- 긴 본문은 다크 배경에서 `neutral-300` 이상, 밝은 배경에서 `neutral-700` 이상을 사용한다.
- 새 색이 필요하면 이 표와 `tailwind.config.js`를 먼저 갱신한다.

## 3. Typography

### Scale

| 수준 | CSS/Tailwind | 범위 | 용도 |
|---|---|---:|---|
| Display | `.text-hero` | `2.4rem`–`5.25rem` | Hero 제목 |
| H1/H2 | `.text-section-title` | `2rem`–`4rem` | 섹션 제목 |
| H3 | `.text-feature-title` | `1.5rem`–`2.5rem` | 기능 제목 |
| Body/lead | `.text-body-lead` | `1.125rem`–`1.375rem` | 도입 문장 |
| Body | `.text-body-regular` | `1rem`–`1.125rem` | 기본 본문 |
| Body/sm | `text-sm` | `0.875rem` | 보조 설명 |
| Caption | `text-xs` | `0.75rem` | 라벨·메타 정보 |

### Font Stack

- Primary: Pretendard, Apple/system Korean sans-serif fallback
- Mono: system monospace (`font-mono`), 영문 섹션 태그와 짧은 상태 문구에만 사용

### Rules

- 큰 제목은 `text-wrap: balance`, 본문은 `text-wrap: pretty`를 우선한다.
- 한국어 본문은 작은 화면에서 강제 `nowrap`을 사용하지 않는다.
- 본문은 14px 미만으로 내리지 않는다. SVG 안의 텍스트는 짧은 보조 라벨로만 쓴다.

## 4. Spacing & Layout

### Base Unit

기본 단위는 4px다. Tailwind 기본 spacing scale의 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 44를 사용한다.

### Grid

- Max content width: `1360px` (`max-w-page`)
- Desktop: 12-column grid
- Gutters: mobile 24px, small screen 32px, desktop 48px
- Breakpoints: Tailwind 기본값(`sm 640`, `md 768`, `lg 1024`, `xl 1280`)
- 섹션 간격: mobile 112px, tablet 144px, desktop 176px 범위의 기존 리듬을 유지한다.

### Rules

- Hero는 `dvh` 기반 최소 높이를 사용하되 콘텐츠가 잘리지 않도록 자연 높이를 허용한다.
- 설명 본문은 한 줄 약 55–65자 폭을 넘기지 않는다.
- 모바일에서는 모든 도식과 CTA가 한 열로 쌓이고 가로 스크롤이 없어야 한다.

## 5. Components

### Section label

- **Structure**: 짧은 선 + 영문/한글 라벨
- **Spacing**: 아래 여백 24–32px
- **Accessibility**: 장식 선은 의미를 갖지 않으며 라벨 텍스트만 읽힌다.
- **Motion**: viewport 진입 시 opacity/translateY

### Integrated header

- **Structure**: 크림 면, 검정 로고, 기존 TestWell 메뉴와 실제 서비스 CTA
- **Depth**: 얇은 하단 경계선만 사용
- **Behavior**: 스크롤 전후 높이와 색을 크게 바꾸지 않는다.
- **Accessibility**: 모바일 메뉴는 `aria-expanded`와 명확한 포커스 표시를 유지한다.

### Primary CTA

- **Structure**: 설명적인 링크 텍스트 + 방향 아이콘
- **Variants**: 노랑 배경/검정 글자, 검정 배경/흰 글자
- **States**: hover 색상 변화와 미세한 translateY, active 복귀, 명확한 focus-visible outline
- **Accessibility**: 목적지가 문구만으로 이해되어야 하며 외부 서비스 이동은 실제 HTTPS 경로를 사용한다.

### Secondary CTA

- **Structure**: 테두리 또는 낮은 대비 면 + 아이콘/텍스트
- **States**: hover 면·테두리 변화, active, focus-visible
- **Accessibility**: `#` 더미 링크를 사용하지 않는다.

### Feature block

- **Structure**: 번호·제목·현재 기능 설명·직접 CTA + 기능 화면 예시
- **Spacing**: 기능 블록 사이 128–176px
- **Accessibility**: 화면 예시는 실제 제품 데이터가 아닌 경우 명시하고, 핵심 설명은 HTML 텍스트로 제공한다.
- **Motion**: 한 번만 재생되는 opacity/translateY

### Audience path

- **Structure**: 방문 목적·할 수 있는 일·시작 링크
- **Variants**: 검사 참여, 결과 확인, 검사 제작·운영
- **Accessibility**: 제목은 올바른 heading level을 사용하고 링크에 구체적 목적을 쓴다.

### Editorial action rail

- **Structure**: 번호·행동 제목·한 줄 설명·직접 링크를 한 줄의 구획으로 배치한다.
- **Purpose**: 카드 장식보다 방문자가 바로 고를 수 있는 세 가지 시작 경로를 먼저 읽히게 한다.
- **States**: 링크만 짧게 이동하고, 행 전체는 버튼처럼 보이게 과장하지 않는다.

### Hero flow panel

- **Structure**: 데스크톱 히어로의 빈 오른쪽 면에 ‘검사 찾기 → 응답하기 → 결과 확인’의 세 단계만 둔다.
- **Purpose**: 장식용 도식이 아니라, 처음 방문한 사람이 TestWell이 하는 일을 한눈에 파악하게 한다.
- **Responsive**: 작은 화면에서는 제목과 CTA의 읽기 흐름을 해치지 않도록 숨긴다.

## 6. Motion & Interaction

| 유형 | 시간 | easing | 용도 |
|---|---:|---|---|
| Micro | 150–200ms | ease-out | 버튼 hover/active |
| Standard | 200–300ms | ease-in-out | 메뉴·선택 상태 |
| Emphasis | 500–900ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero·섹션 진입 |

- `transform`과 `opacity` 중심으로 움직인다.
- `prefers-reduced-motion: reduce`에서는 비필수 애니메이션을 사실상 제거한다.
- 모든 인터랙티브 요소는 hover, active, focus-visible 상태를 갖는다.

## 7. Depth & Surface

### Strategy: mixed, border-led

기존 프로토타입을 보존하기 위해 얇은 경계선을 기본 깊이 언어로 사용하고, 핵심 CTA와 시각화 프레임에만 제한적인 그림자를 허용한다.

- 기본 구분: `border-white/10`, `border-black/10`
- 카드 면: `neutral-900/60` 또는 `brand-black-card`
- 그림자: CTA와 대표 시각화에만 사용하며 장식 카드에는 반복하지 않는다.
- 밝고 어두운 섹션의 큰 tonal shift가 최상위 정보 구조를 만든다.

## Current landing revision — 2026-09-07

The hero uses the cream surface and centered service copy, followed by one wide workspace preview. The preview has three selectable work views; illustrative content is labeled and contains no fictional performance metrics. On mobile, sidebar navigation becomes a horizontal three-button selector. The older dark hero flow-panel and dark editorial statement prescriptions above are superseded by this revision. Yellow remains a small accent; the main creation action uses black. Body copy remains readable, and smaller metadata is limited to labels inside the illustrative workspace. No autoplay or decorative motion is added.

## Current reference — SJGOD
The explicit visual reference is now https://sjgod.kr/. The dark illustrated hero with large left-aligned white type supersedes the prior centered cream workspace. The catalog stays light, the creator links are secondary, and the footer returns to black. Original TestWell identity and service entry points are preserved. See docs/sjgod-design-reference.md for the image prompt and implementation rationale.
