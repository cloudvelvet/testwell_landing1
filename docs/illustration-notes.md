# V3 삽화 사용 결정

2026-09-08: 기존 삽화는 제품 구조보다 분위기를 전달하므로 화면에서 제외했다. 자산과 아래 생성 기록은 보존한다. 현재 ProductFlow는 외부 이미지 없이 HTML과 기존 lucide 아이콘으로 만든 설명 도식이다.

## 이전 제작 기록

# TestWell 삽화

## 용도와 제작 방식

기본 내장 imagegen으로 생성한 삽화다. 실제 제품 화면이나 검사 결과를 재현한 이미지가 아니다. 2026-09-07 개편에서 기능 소개 아래의 그림을 첫 화면 배경으로 옮겼다. 원본은 유지하고 CSS grayscale, invert, 낮은 불투명도와 그라데이션으로 어두운 화면에 맞췄다.

사용 파일: `public/testwell-question-workshop.webp` (960×640). 1536×1024 PNG 생성 원본을 보존하고 표시용 사본만 리사이즈·WebP 인코딩했다. 첫 화면 장식 이미지이므로 빈 대체 텍스트와 aria-hidden을 적용한다. 명시적 크기와 fetchPriority="high"를 사용하며 lazy loading은 하지 않는다. 기존 서비스 바로가기와 문구는 바꾸지 않았다.

## 생성 프롬프트

Create one refined editorial illustration for a Korean online assessment platform landing page, TestWell. This is a real website asset, not a screenshot or UI mockup. Landscape 3:2 composition. Art direction: sophisticated two-ink black and mustard yellow (#E9B20A) editorial screenprint on warm cream (#F6F2EA); confident simple contours, restrained printed grain, asymmetric balanced composition, adult professional tone, not cute or corporate cartoon. A close-up tabletop scene: an adult hand arranging two or three question sheets beside an open slim laptop, with a second adult hand using a pencil to respond on a sheet. The laptop only shows simple neutral horizontal lines and a single selection circle, visibly illustrative, no actual interface. Sheets have a few understated lines or circles representing questions, not an OMR grid. Focus on the tangible acts of preparing questions and answering them, with large clear shapes readable at 350px wide. One mustard yellow paper/folder and the black laptop provide strong focal forms. Leave breathing room; no surrounding frame. Background is flat warm cream all the way to edges so it sits in a cream website section. No text, letters, numbers, logos, scores, chart, brain, AI network, sparkles, floating dashboards, stock-business people, graduation symbols, or medical imagery. No title or caption embedded. Do not depict scoring or automated analysis. Anatomically plausible hands, only two hands, visually distinct input and preparation actions. Render a polished, original illustration with sharp edges and subtle tactile texture.
