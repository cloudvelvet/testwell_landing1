/**
 * 교수님 문구 편집 파일 — 사용법: 프로젝트 루트의 문구수정안내.md
 * 따옴표 안의 글자만 수정하세요. 왼쪽 항목명, 쉼표, 괄호는 유지합니다.
 * link 값은 연결 설정이므로 수정하지 않습니다. 문구 변경은 저장 후 미리보기에서 확인하세요.
 */
export const SITE_CONTENT = {
  // 공통: 로고 글자와 화면 읽기 프로그램용 안내
  shared: { logo: 'TestWell', skip: '본문으로 건너뛰기', homeLabel: 'TestWell 맨 위로' },
  // 1. 화면 맨 위 메뉴: label만 수정하고 link는 유지하세요.
  header: {
    nav: [
      { label: '이용 안내', link: 'about' },
      { label: '내 검사', link: 'myTests' },
      { label: '결과 확인', link: 'result' },
    ],
    login: '로그인', menuOpen: '메뉴 열기', menuClose: '메뉴 닫기', navLabel: '주요 메뉴', mobileLabel: '모바일 메뉴',
  },
  // 2. 검정 첫 화면: title의 두 문장은 각각 한 줄입니다.
  // primary/note, ticket/ticketNote, browse/browseNote, result/resultNote는 버튼/아래 설명입니다.
  hero: {
    label: '심리검사 · 학습평가',
    title: ['검사를 만드는 일부터,', '참여와 결과 확인까지.'],
    description: 'TestWell은 심리검사와 학습평가를 위한 온라인 플랫폼입니다. 검사 제작·운영자는 문항과 검사지를 준비하고, 참여자는 검사에 응답하고 결과를 확인합니다.',
    primary: '검사 만들기',
    note: '로그인 후 질문 관리에서 시작하세요.',
    ticket: '응시권 입력',
    ticketNote: '받은 응시권 코드로 검사에 참여하세요.',
    browse: '검사 보기',
    browseNote: '공개된 검사를 둘러보세요.',
    result: '결과 확인',
    resultNote: '참여한 검사의 결과를 확인하세요.',
  },
  // 3. '응시권 입력' 버튼을 눌렀을 때 펼쳐지는 입력란
  ticketForm: {
    label: '응시권 코드',
    placeholder: '코드를 입력하세요',
    submit: '검사 시작',
    note: 'TestWell 공식 서비스로 이동합니다.',
    emptyError: '응시권 코드를 입력해 주세요.',
    invalidError: '받은 응시권 코드를 다시 확인해 주세요.',
  },
  // 4. 크림색 주요 기능 안내: title의 \n은 줄바꿈입니다.
  // displayItems는 왼쪽부터 아이콘 순서입니다. 개수(6개)와 순서를 유지하세요.
  capabilities: {
    listLabel: 'TestWell 주요 기능', // 화면 읽기 프로그램용 목록 이름
    label: 'TestWell 주요 기능',
    title: '검사 준비부터\n결과 확인까지.',
    description: '문항을 준비하고 검사를 운영하는 일부터, 검사 참여와 결과 확인까지 지원합니다.',
    displayItems: ['문항 작성', '검사지 구성', '참여자 관리', '설문 배포', '검사 참여', '결과 확인'],
  },
  // 5. 원형 기능 안내 아래의 짧은 설명
  measurement: {
    label: '문항을 준비하기 전에',
    title: '검사의 목적에 맞게 문항을 구성하세요',
    description: '확인하려는 내용에 따라 필요한 문항이 달라집니다. 검사 목적을 먼저 정하고, 그 목적에 맞는 질문과 문제를 준비해 보세요.',
  },
  // 6. 하단 검정 영역: 검사 탐색과 문의 안내. link는 유지하세요.
  finalCta: {
    label: '다음으로', title: '목적에 맞는 곳으로 이어집니다.',
    links: [
      { title: '검사 둘러보기', action: '공식 서비스에서 둘러보기', link: 'browseTests' },
      { title: '이용 방법이 궁금하다면', action: 'TestWell에 문의하기', link: 'contact' },
    ],
  },
  // 7. 맨 아래 푸터: 연도는 자동 표시됩니다. link는 유지하세요.
  footer: {
    tagline: '온라인 검사 제작 · 참여 · 결과 확인',
    navLabel: '서비스 정보',
    links: [
      { label: '공식 소개', link: 'officialAbout' },
      { label: '이용약관', link: 'terms' },
      { label: '개인정보처리방침', link: 'privacy' },
    ],
    copyright: 'TestWell. 모든 권리 보유.',
  },
} as const;
