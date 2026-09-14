# TestWell 랜딩페이지

교수님께 전달하실 때는 **[두 가지 수정 방법 안내](교수님께_전달드리는_안내.md)** 부터 확인해 주세요.

- 워드에 수정 내용 작성: [교수님용 문구 수정표](deliverables/TestWell_문구수정표_교수님용.docx)
- 문구 파일 직접 수정: [간단 안내](교수님께_전달드리는_안내.md) · [미리보기와 상세 안내](문구수정안내.md)

- 본문 편집 파일: [src/constants/content.ts](src/constants/content.ts)
- 디자인 기준: [DESIGN.md](DESIGN.md)
- 로컬 실행: `npm ci` 후 `npm run dev`
- 빌드 확인: `npm run build`

로컬 저장이나 GitHub 커밋만으로 실제 TestWell 서비스에 배포되지는 않습니다.

## 실행 및 확인

Node.js 20 이상에서 실행합니다.

```bash
npm ci
npx playwright install chromium
npm run check
npm run dev -- --port 5175
```

`npm run check`는 프로덕션 빌드 후 임시 포트에서 페이지를 실행하고 320·360·390·768·1024·1280·1440px 화면을 검사합니다. 메뉴 키보드 조작, 응시권 입력 오류·Esc 닫기·코드 인코딩, 링크, 가로 넘침, 원형 안내 비율을 확인합니다. 응시권 이동은 테스트에서 가로채므로 실제 응시권을 사용하지 않습니다. 검사 결과와 화면 캡처는 `output/verification/`에 생성됩니다.

기존 `artifacts/`는 이전 작업의 기록입니다. 현재 소스의 통과 여부는 `npm run check`로 새로 확인하세요. 설치된 별도 Chromium을 사용하려면 `PLAYWRIGHT_EXECUTABLE_PATH`에 실행 파일 경로를 지정할 수 있습니다.

실제 서비스의 로그인 진입 확인은 개발 서버를 실행한 뒤 `npm run check:routes`로 별도 수행합니다. 기본 주소는 `http://127.0.0.1:5175/`이며 `CHECK_URL`로 변경할 수 있습니다. 이 검사는 로그인을 제출하지 않습니다.

## 서비스에 연결할 때

빌드 결과는 `dist/`입니다. 자산 경로는 상대 경로이므로 별도 소개 주소 또는 하위 디렉터리에서도 제공할 수 있습니다. 하위 디렉터리 주소는 끝에 `/`가 오도록 서버에서 리디렉션해야 합니다.

현재 검사 보기 버튼은 기존 `https://testwell.kr/`로 이동합니다. 이 페이지로 해당 루트를 바로 교체하면 버튼이 자기 자신으로 돌아옵니다. 운영 루트 교체에는 [기존 기능·서버 통합 확인](docs/DEPLOYMENT_BLOCKERS.md)이 필요합니다. 이 저장소에는 검사 서비스 백엔드나 운영 서버 설정이 포함되어 있지 않습니다.

폰트는 `pretendard@1.3.9`를 빌드에 포함해 외부 CDN 없이 제공합니다. 라이선스는 `public/pretendard-LICENSE.txt`에 함께 포함되어 있습니다. 이번 수정·검증 범위는 [완료 기록](docs/COMPLETION_2026-09-14.md)을 참고하세요.
