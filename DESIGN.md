# TestWell Landing Prototype Design System

## Current visual direction — 2026-09-07

Result context refinement: retain the two-column aside and dark palette, use `mt-12 sm:mt-16 pt-8`, and reduce the containing section's bottom padding to `pb-16`. Lead sentence is white; supporting interpretation remains neutral-300. Replace the scaling definition with plain-language interpretation guidance, without product claims.

This revision supersedes the earlier cream-section and yellow-band patterns below. SJGOD is the visual reference; TestWell retains its own content and yellow action accent.

- Continuous dark surfaces: `brand-black` for hero/header/footer; `brand-black-subtle` for about and closing CTA.
- White headings; `neutral-300` body; `neutral-400` labels; `border-white/15` dividers. Yellow remains on actions and small labels only.
- Hero illustration: existing workshop asset, positioned as a broad decorative background, grayscale/inverted with screen blending, low opacity and a left-to-right dark readability overlay. No text is embedded in it. On mobile it occupies the upper hero only and is more subdued.
- Participant shortcuts: open dark block with thin top rule, no cream card or yellow top stripe. Full-row links, same accessible heading and ordering.
- Header navigation and footer keep their structure while switching to on-dark text. Closing CTA uses a yellow button, not a full yellow section.
- Existing typography, page width and spacing scale remain the source of layout tokens. Hero uses `min-h-[44rem]` at desktop to give the large image room; content can grow naturally. Illustration has explicit dimensions and is eager-loaded in the hero.

## 1. Atmosphere & Identity

TestWell 랜딩페이지는 별도 캠페인 사이트가 아니라 기존 `testwell.kr` 안에 자연스럽게 이어지는 서비스 안내 화면처럼 느껴져야 한다. 따뜻한 크림 면·검정 본문·노랑 행동색을 기본으로 하고, 장식보다 실제 기능과 시작 경로가 먼저 읽히게 한다. 전문성은 연구자 개인 서사가 아니라 질문 구성, 참여 관리, 결과 확인이 연결되는 정보 구조에서 드러낸다.

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

- **Structure**: 번호·제목·실제 서비스 메뉴 라벨·현재 기능 설명·직접 CTA
- **Spacing**: 기능 블록 사이 128–176px
- **Accessibility**: 핵심 설명은 HTML 텍스트로 제공하고, 서비스 메뉴 라벨은 제목보다 낮은 위계로 처리한다.
- **Motion**: 한 번만 재생되는 opacity/translateY

### Audience path

- **Structure**: 방문 목적·할 수 있는 일·시작 링크
- **Variants**: 참여자, 검사 운영자
- **Accessibility**: 제목은 올바른 heading level을 사용하고 링크에 구체적 목적을 쓴다.

### Participant entry

- **Structure**: 히어로의 크림색 영역에 내 검사와 결과 확인 링크를 둔다. 각 행 전체가 링크다.
- **Purpose**: 서비스 정의와 제작 시작은 왼쪽, 기존 참여자의 바로가기는 오른쪽에서 제공한다.
- **Constraint**: 실제 공개 내검사·결과보기 경로와 같은 이름을 사용하고 로그인 필요를 알린다. 답안지 장식은 사용하지 않는다.
- **Responsive**: 모바일에서는 제작 버튼 다음에 표시한다. 고정 높이 없이 내용만큼 배치한다.

### Creation entry clarity

- Header의 강조 CTA는 Hero와 동일한 검사 만들기 경로를 사용한다. 내 검사는 일반 탐색 링크와 참여자 패널에 유지한다.
- Hero 제작 버튼 아래 `mt-3 text-sm text-neutral-300` 안내로 질문 관리에서 시작하며 로그인이 필요함을 알린다. `aria-describedby`로 버튼과 연결한다.
- 기능 목록은 질문·검사지·참여자라는 관리 대상별로 구분한다. 필수 제작 절차로 오인할 수 있는 순서 번호는 붙이지 않는다.

### Capability list

- **Structure**: 질문 관리, 검사지 구성, 참여자 그룹 관리를 제목·설명·해당 메뉴 링크로 소개한다.
- **Purpose**: 기능마다 관리하는 대상을 구체적으로 구분한다. 역할 안내와 별도의 운영 과정 섹션은 합친다.
- **Constraint**: 공개 서비스에서 확인한 기능 이름만 사용한다.
- **Copy**: 메뉴 구조를 반복하지 않고 질문 한 개, 질문을 묶은 검사지, 참여자 그룹을 구분해서 설명한다. 실제 사례나 제공 결과의 형태를 추측해 넣지 않는다.

### Preparation CTA

- **Structure**: 기존 노랑 CTA 영역에 목적·대상을 묻는 제목과 결과의 사용처를 환기하는 짧은 본문을 둔다. 기존 제작·문의 링크를 유지한다.
- **Typography**: 기존 제목과 `text-body-regular`를 사용하고 본문 위 간격은 `mt-3`이다.
- **Constraint**: 연구자 자기소개나 측정 품질 보증 문구를 추가하지 않는다.

### Result context (후속 수정)

- **Structure**: 기능 목록 아래 같은 크림색 섹션 안에 얇은 상단 구분선과 제목·본문을 둔다. 별도 카드, 가짜 점수, 흐름 도식은 사용하지 않는다.
- **Tokens**: `mt-12 sm:mt-16`, `pt-8`, `gap-6 lg:gap-20`, 기존 0.8fr/1.2fr 그리드, 제목 `text-2xl`, 본문 `text-body-regular`, 라벨·범위 안내 `text-sm`.
- **Copy boundary**: 척도화와 점수 해석 근거를 일반 설명으로 구분한다. TestWell 자동 분석·척도화 기능으로 소개하지 않는다.
- **CTA update**: 마지막 노랑 영역은 준비 질문 대신 짧은 제작·문의 안내로 사용한다.

### Editorial illustration

- **Purpose**: 질문 준비와 응답 장면을 표현한 보조 삽화. 실제 TestWell 화면이나 검사 결과의 증거로 사용하지 않는다.
- **Style**: 크림 바탕, 검정 윤곽, 노랑 소품, 절제한 인쇄 질감. 점수·그래프·문구·뇌·AI 네트워크를 넣지 않는다.
- **Placement**: 기능 소개 왼쪽 본문 아래 `mt-8`, `w-full max-w-md`, 3:2 비율. 모바일에서는 기능 목록 앞에 표시한다. 테두리·추가 카드는 사용하지 않는다.
- **Loading**: 명시적 width/height와 lazy loading으로 공간을 예약하고 첫 화면 렌더링을 막지 않는다.

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
