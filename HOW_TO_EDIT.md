# TestWell 프로토타입 수정 및 운영 가이드

본 프로젝트는 TestWell 메인 랜딩페이지 리디자인 시안을 위한 독립 프론트엔드 프로토타입입니다.  
복잡한 React/HTML 코드를 다루실 필요 없이, 기본 문구와 서비스 링크는 설정 파일에서 관리합니다.

---

## 1. 텍스트 및 문구 수정 (가장 추천)

기본 문구는 아래 파일에서 관리합니다. 역할별 이용 안내는 `src/components/WhatIsTestWell.tsx`, 마지막 안내는 `src/components/FinalCTA.tsx`에 있습니다:

📁 **`src/constants/content.ts`**

### 수정 예시
`hero`, `header`, `footer` 항목의 한글 문구를 수정하면 각 섹션에 반영됩니다. 역할별 이용 안내와 하단 문구는 위 컴포넌트에서 수정하세요.
메모장, VS Code 등 편하신 텍스트 에디터로 위 파일의 한글 텍스트만 변경하고 저장하시면 사이트에 즉시 반영됩니다.

---

## 2. 링크 및 버튼 연결 수정

버튼 클릭 시 이동할 URL이나 기능 경로는 아래 파일에서 관리합니다:

📁 **`src/constants/links.ts`**

이 파일에는 TestWell 공식 서비스에서 직접 확인한 검사 목록, 내검사, 결과보기, 문제은행, 검사지 만들기, 출판 신청, 그룹관리 경로가 모여 있습니다. 경로가 실제 서비스에서 변경된 경우에만 함께 수정하세요.

현재 기능과 향후 지향점을 구분한 문구 근거는 `docs/testwell-landing-rationale.md`, 시각 토큰과 컴포넌트 규칙은 `DESIGN.md`에서 확인할 수 있습니다.

---

## 3. 로컬에서 실행하고 확인하는 방법

### 필요 환경
- [Node.js](https://nodejs.org/) (v18 이상 설치)

### 실행 명령어 (터미널)
```bash
# 1. 패키지 설치 (최초 1회)
npm ci

# 2. 로컬 개발 서버 실행
npm run dev
```
실행 후 브라우저에서 **`http://localhost:5173`** 에 접속하시면 수정된 화면을 실시간으로 확인하실 수 있습니다.

---

## 4. 웹 배포 (Vercel 무료 배포)
교수님 또는 팀원들이 설치 없이 스마트폰이나 PC 웹 링크로 바로 접속하게 하려면:
1. GitHub 레포지토리에 프로젝트 업로드
2. [Vercel](https://vercel.com/) 접속 후 `Import Project` 클릭
3. 별도 설정 없이 `Deploy` 버튼만 누르면 30초 내에 전용 URL(예: `https://testwell-redesign.vercel.app`)이 생성됩니다.

## 현재 첫 화면
검사 검색은 src/components/Hero.tsx, 공개 검사 목록은 src/components/TestCatalog.tsx, 제작자 링크는 src/components/WhatIsTestWell.tsx에서 관리합니다. 검사 목록은 정적 스냅샷입니다. 배경 삽화는 public/testwell-editorial-hero.png이며 제작 기록은 docs/sjgod-design-reference.md에 있습니다. 이전 작업 미리보기는 화면에 표시하지 않습니다.
