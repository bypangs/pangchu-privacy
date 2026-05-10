# AGENTS

## 고정 규칙
- 홈페이지의 기준 도메인은 항상 `https://bypangs.github.io/pangchu-privacy`로 통일한다.
- 검색엔진 제출 항목(Google Search Console, sitemap, robots, canonical, og:url 등)은 로컬 주소(`localhost`, `127.0.0.1`, `file://`)를 절대 사용하지 않는다.
- 로컬 웹 서버(`py -m http.server`, 127.0.0.1 기반)는 오직 개발 미리보기용으로만 사용하고, 공개 공개 배포 URL과 섞어 쓰지 않는다.
- 사용자가 "홈페이지 기준"이라고 지시한 경우, 모든 분석/점검/수정의 기준은 라이브 페이지 기준으로 수행한다.
- `AGENTS.md` 규칙은 작업 전/중/후 판단 우선순위에서 준수해야 한다.
- index 페이지의 SEO/메타 보강을 수정할 때 `privacy.html`, `terms.html`도 같은 라운드에서 함께 점검·동기화한다. (`sitemap.xml` 등록 포함)

## 운영 체크리스트
- 수정 후에는 `index.html`, `privacy.html`, `terms.html`, `ko/`, `ja/`, `pt-br/`, `zh-hk/`의 링크/메타가 라이브 도메인인지 우선 확인한다.
- `sitemap.xml`의 `<loc>`/`<xhtml:link>`는 실제 공개 URL인지 확인하고, 존재하지 않거나 로컬 주소가 있으면 즉시 수정한다.
- 배포 전/후 Search Console에서는 사이트맵 URL을 `https://bypangs.github.io/pangchu-privacy/sitemap.xml`로만 제출한다.

## 백업 / 저장 체크포인트
- 큰 수정 라운드가 안정적으로 끝났거나 사용자가 "백업해줘", "저장해줘", "커밋해줘"처럼 명시하면 먼저 `git status --short`와 `git diff --stat`으로 변경 범위를 확인한다.
- 미커밋 변경이 있으면 관련 파일만 스테이징하고, 임시 파일·로그·테스트 산출물(`tmp-*`, `test-results/` 등)은 포함하지 않는다.
- 백업 커밋은 작업 내용을 알아볼 수 있는 짧은 메시지로 남긴다. 예: `Fix localized pages and language switching`.
- 안정본 기준점은 주석 태그로 남긴다. 태그 형식은 `backup-YYYY-MM-DD-brief` 또는 작업이 분명한 `backup-language-fix-YYYY-MM-DD`처럼 작성한다.
- 워킹트리가 이미 깨끗하면 새 커밋 없이 현재 `HEAD`에 백업 태그만 붙일 수 있다.
- 원격/GitHub 백업은 사용자가 명시적으로 "푸시", "원격 백업", "GitHub에 올려"라고 요청한 경우에만 현재 브랜치와 필요한 태그를 push한다.
- 완료 보고에는 커밋 해시, 태그 이름, 원격 push 여부, 남은 변경 파일 여부를 짧게 적는다.

## 말랑냥이 홈페이지 전용 규칙

### 앱 이름/브랜드 표기
- 한국어 앱 이름은 `말랑냥이점프`로 통일한다.
- 영어/글로벌 앱 이름은 `Jelly Cat Jump`로 통일한다.
- 번체/홍콩 앱 표시명은 `啫喱貓跳跳`로 통일한다.
- 브라질 포르투갈어 앱 표시명은 `Gatinho Pula-Pula`로 통일한다.
- 일본어 앱 이름은 `ぷにねこジャンプ`로 통일한다.
- 이전 표기인 `ネコニャンジャンプ`는 사용자가 다시 확정하기 전까지 앱 이름으로 사용하지 않는다.
- 단, 일반 설명 문장 안의 형용 표현까지 무조건 교체하지 말고, 앱 이름/타이틀/메타/JSON-LD/alt/OG/Twitter 문구일 때만 교체한다.

### 국가/언어별 앱명 고정 규칙
- 현재 앱은 `말랑냥이점프` / `Jelly Cat Jump` 계열의 점프 게임이다.
- 한국어/한국 스토어 앱명은 `말랑냥이점프`로 고정한다.
- 영어/글로벌 기본 앱명은 `Jelly Cat Jump`로 고정한다.
- 일본어/일본 스토어 앱명은 `ぷにねこジャンプ`로 고정한다.
- 홍콩/번체 앱명은 `啫喱貓跳跳`로 고정한다.
- 브라질 포르투갈어 앱명은 `Gatinho Pula-Pula`로 고정한다.
- 국가별 앱명은 사용자의 명시 요청 없이 임의 변경하지 않는다.
- `/` 영어 기본 페이지에서는 대표 앱명 `Jelly Cat Jump`를 title, Featured Game, meta description, JSON-LD, Open Graph, Twitter, alt, FAQ에서 사용한다.
- `/ko/` 한국어 페이지에서는 대표 앱명 `말랑냥이점프`를 title, Featured Game, meta description, JSON-LD, Open Graph, Twitter, alt, FAQ에서 사용한다.
- `/ja/` 일본어 페이지에서는 대표 앱명 `ぷにねこジャンプ`를 title, Featured Game, meta description, JSON-LD, Open Graph, Twitter, alt, FAQ에서 사용한다.
- `/zh-hk/` 홍콩/번체 페이지에서는 대표 앱명 `啫喱貓跳跳`를 title, Featured Game, meta description, JSON-LD, Open Graph, Twitter, alt, FAQ에서 사용한다.
- `/pt-br/` 브라질 포르투갈어 페이지에서는 대표 앱명 `Gatinho Pula-Pula`를 title, Featured Game, meta description, JSON-LD, Open Graph, Twitter, alt, FAQ에서 사용한다.
- JSON-LD의 `name`은 해당 언어/지역 대표 앱명을 사용하고, `alternateName`에는 확정된 다른 언어/지역 앱명을 함께 포함할 수 있다.
- 홍콩/번체 앱명을 임의로 `Jelly Cat Jump`, `貓咪跳跳`, `果凍貓跳躍`, `軟萌喵跳跳` 등으로 변경하지 않는다.
- 브라질 앱명을 임의로 `Jelly Cat Jump`, `Pulo do Gato`, `Gato Gelatinoso`, `Gatinho Saltitante` 등으로 변경하지 않는다.
- `Jelly Cat Jump`를 모든 나라에 일괄 적용하지 않는다.
- 기존 Play Console 맞춤 등록정보 이름과 홈페이지 표기가 충돌하면, 사용자가 확정한 국가별 표기명을 우선한다.
- 향후 시리즈명은 참고용으로만 취급하고, 현재 홈페이지 작업에서는 점프 게임명만 수정 대상으로 삼는다.
- 향후 달리기 게임 후보명은 한국어 `말랑냥이런`, 영어/글로벌 `Jelly Cat Run`, 일본어 후보 `ネコニャンラン`이며, 사용자가 명시적으로 요청하기 전까지 현재 페이지에 추가하지 않는다.

### 언어별 페이지 경로 고정
- 언어별 공개 경로는 아래 기준으로 유지한다.
- 영어 기본: `https://bypangs.github.io/pangchu-privacy/`
- 한국어: `https://bypangs.github.io/pangchu-privacy/ko/`
- 일본어: `https://bypangs.github.io/pangchu-privacy/ja/`
- 홍콩/번체: `https://bypangs.github.io/pangchu-privacy/zh-hk/`
- 브라질 포르투갈어: `https://bypangs.github.io/pangchu-privacy/pt-br/`
- 경로명을 임의로 `/zh-hant/`, `/jp/`, `/br/`, `/en/` 등으로 변경하지 않는다.

### hreflang / lang 표기 정책
- `/ko/`는 `html lang="ko"` 및 `hreflang="ko"`를 사용한다.
- `/ja/`는 `html lang="ja"` 및 `hreflang="ja"`를 사용한다.
- `/pt-br/`는 `html lang="pt-BR"` 및 `hreflang="pt-BR"`를 사용한다.
- `/zh-hk/`는 홍콩/번체 페이지로 취급한다.
- `/zh-hk/`의 표기는 한 프로젝트 안에서 `zh-HK`로 일관되게 유지한다.
- 번체 페이지는 경로는 `/zh-hk/`를 유지하되, hreflang/html lang 표기는 홍콩 타깃 기준으로 `zh-HK`를 사용한다. 경로명은 바꾸지 않는다.
- 현재 경로가 `/zh-hk/`이므로 홍콩 타깃을 우선해 `zh-HK`를 사용한다.
- hreflang alternate는 실제 존재하는 공개 URL만 가리켜야 한다.
- canonical은 각 페이지 자기 자신의 공개 URL을 가리켜야 한다.

### privacy.html / terms.html 정책
- `privacy.html`과 `terms.html`은 현재 별도 언어 URL이 없는 단일 정책 페이지다.
- 별도 `/ko/privacy.html`, `/ja/privacy.html` 같은 실제 페이지를 만들기 전까지는 `privacy.html`, `terms.html`의 hreflang alternate를 각 언어 홈 페이지(`/ko/`, `/ja/`, `/zh-hk/`, `/pt-br/`)로 연결하지 않는다.
- 정책 페이지의 canonical은 반드시 자기 자신이어야 한다.
- 정책 페이지의 hreflang은 단일 정책 페이지 기준으로 `x-default`와 `en`만 자기 자신을 가리키게 유지한다.
- 정책 문구 수정 시 법적 의미가 크게 바뀌지 않도록 최소 변경한다.

### JS 번역 데이터 수정 규칙
- `privacy.html`, `terms.html` 안의 translations 객체를 수정할 때는 중복 키와 중복 콤마를 만들지 않는다.
- 같은 객체 안에서 `s3_p2` 같은 키가 중복되면 뒤쪽 값이 앞쪽 값을 덮어쓰므로 반드시 고유 키로 정리한다.
- 문자열 끝에 `",,` 같은 문법 오류가 생기지 않게 확인한다.
- 일본어/중국어/포르투갈어 문장을 수정할 때 깨진 조각이 붙어 있지 않은지 확인한다.
- 수정 후 브라우저 콘솔에서 script 문법 오류가 없어야 한다.
- 가능하면 HTML 안의 script만 따로 추출하거나 브라우저에서 열어 문법 오류를 확인한다.

### sitemap / robots / app-ads 보호 규칙
- `sitemap.xml`의 모든 `<loc>`와 `<xhtml:link>`는 `https://bypangs.github.io/pangchu-privacy` 기준의 공개 URL이어야 한다.
- 존재하지 않는 URL을 sitemap에 추가하지 않는다.
- 단순 수정 때 `lastmod`를 의미 없이 대량 변경하지 않는다.
- `robots.txt`는 전체 차단하지 않는다.
- `robots.txt`의 Sitemap 위치는 `https://bypangs.github.io/pangchu-privacy/sitemap.xml`로 유지한다.
- `app-ads.txt`는 광고 수익과 연결되는 파일이므로 사용자가 명시적으로 요청하지 않으면 수정하지 않는다.
- `app-ads.txt`의 AdMob publisher ID를 임의로 변경하지 않는다.

### GitHub Pages 경로 규칙
- 이 사이트는 루트 도메인이 아니라 `/pangchu-privacy/` 하위 경로에서 배포된다.
- 절대 경로를 사용할 때 `/assets/...`처럼 사이트 루트를 기준으로 쓰면 GitHub Pages에서 깨질 수 있다.
- 공개 링크, 이미지, canonical, og:image, twitter:image, sitemap URL은 `/pangchu-privacy/` 경로를 포함해야 한다.
- 로컬 미리보기에서만 맞는 경로로 수정하지 않는다.

### 수정 범위 원칙
- 홈페이지 작업은 기본적으로 최소 변경으로 수행한다.
- 디자인/레이아웃/문구 톤/색상/이미지 배치는 사용자가 요청하지 않으면 바꾸지 않는다.
- SEO 수정 중에도 기존 개인정보처리방침, 이용약관, app-ads.txt, sitemap, robots 링크가 깨지지 않게 확인한다.
- 완료 보고에는 수정한 파일명, 변경 요약, 확인한 URL/항목, 남은 확인 필요사항만 적는다.
- 사용자가 요청하지 않으면 전체 파일을 출력하지 않는다.

### 검토/의견 요청 처리 규칙
- 사용자가 "괜찮은지 봐줘", "의견 줘", "이렇게 하면 되는지 체크", "분석해봐", "어떤지 봐줘"처럼 검토나 판단을 요청하면 파일을 바로 수정하지 않는다.
- 검토 요청에서는 구조 파악, 검색, 비교, 문제점 정리, 추천 방향 제시까지만 수행한다.
- 검토 요청 중에는 `apply_patch`, 파일 저장, 일괄 치환, 자동 생성 같은 실제 수정 작업을 하지 않는다.
- 사용자가 "수정해줘", "적용해줘", "추가해줘", "고쳐줘", "반영해줘"처럼 명시적으로 변경을 요청한 경우에만 파일을 수정한다.
- 의견을 물어본 뒤 사용자가 수정 요청으로 전환하면, 그때 변경 대상 파일과 수정 범위를 짧게 설명한 뒤 최소 변경으로 반영한다.

## 홈페이지 UI/브랜딩 고정 규칙

### 사이트 정체성
- 이 사이트의 1차 정체성은 `Jelly Cat Jump` 단독 게임 랜딩페이지가 아니라 `PangChu Studio` 공식 홈페이지다.
- 루트 기준 페이지는 항상 `https://bypangs.github.io/pangchu-privacy/`의 영어 페이지 구조를 마스터로 삼는다.
- 다른 언어 페이지는 영어 루트 페이지의 UI/섹션 구조를 그대로 따라가고, 텍스트/메타/alt/JSON-LD만 각 언어에 맞게 현지화한다.
- SEO 보강 작업을 하더라도 사이트의 정체성을 게임 단독 랜딩페이지로 바꾸지 않는다.

### H1 / 히어로 영역 보호
- 메인 히어로의 대표 H1은 `PangChu Studio` 기준을 유지한다.
- `Jelly Cat Jump`, `말랑냥이점프`, `ぷにねこジャンプ` 같은 게임명은 메인 H1로 올리지 않는다.
- 게임명은 Featured Game, Game Card, FAQ, 설명 문구, 메타 태그 안에서만 사용한다.
- 히어로 영역의 `Official Studio Website`, 스튜디오 소개, 버튼 구성은 사용자가 명시적으로 요청하지 않으면 변경하지 않는다.

### 언어별 페이지 UI 동기화
- `/ko/`, `/ja/`, `/zh-hk/`, `/pt-br/`는 영어 루트 `/`와 같은 섹션 순서와 레이아웃을 유지한다.
- 언어별 페이지마다 독자적인 UI 구조, 섹션 순서, 카드 배치, 히어로 디자인을 만들지 않는다.
- 영어 루트에 있는 섹션이 다른 언어에서 사라지거나, 다른 언어에만 새 섹션이 생기지 않게 한다.
- 현지화는 문구 번역과 앱명 표기 차이만 허용한다.
- 디자인 수정이 필요한 경우 먼저 영어 루트 페이지를 기준으로 수정하고, 그 구조를 다른 언어 페이지에 동기화한다.

### 다국어 폰트/인코딩 보호 규칙
- 모든 공개 HTML은 `<meta charset="UTF-8">`를 유지하고, 한글/일본어/번체/포르투갈어 문구는 UTF-8로 읽고 저장한다.
- 홈페이지 계열 페이지의 기본 폰트 스택은 `Inter`, `Noto Sans KR`, `Noto Sans JP`, `Noto Sans TC`, system fallback 순서를 유지한다.
- 다국어 문구나 기능을 추가할 때는 `index.html`, `ko/`, `ja/`, `zh-hk/`, `pt-br/`에 같은 i18n 키를 모두 추가하고, 현재 언어의 정적 HTML 문구도 함께 맞춘다.
- 한글, 일본어, 번체, 포르투갈어가 PowerShell 기본 출력에서 깨져 보일 수 있으므로 확인 시 `-Encoding UTF8`을 명시한다.
- 수정 후에는 각 언어 페이지에서 새 문구가 깨지지 않는지, 버튼/FAQ/카드 안에서 줄바꿈이 자연스러운지 확인한다.

### Featured Game 영역 정책
- 글로벌 기준 게임명은 `Jelly Cat Jump`이며, 각 언어/지역 페이지에서는 해당 지역의 확정 앱명을 PangChu Studio의 Featured Game으로 표시한다.
- 한국어 페이지에서는 Featured Game 안의 앱명을 `말랑냥이점프`로 표시한다.
- 일본어 페이지에서는 Featured Game 안의 앱명을 `ぷにねこジャンプ`로 표시한다.
- 영어 페이지에서는 Featured Game 안의 앱명을 `Jelly Cat Jump`로 표시한다.
- 번체/홍콩 페이지에서는 Featured Game 안의 앱명을 `啫喱貓跳跳`로 표시한다.
- 브라질 포르투갈어 페이지에서는 Featured Game 안의 앱명을 `Gatinho Pula-Pula`로 표시한다.
- 게임 소개를 강화하더라도 Featured Game 섹션 내부에서만 강화한다.
- 전체 홈페이지를 게임 전용 판매 페이지처럼 바꾸지 않는다.

### SEO와 UI 분리 원칙
- SEO title, meta description, OG, Twitter, JSON-LD 보강은 허용한다.
- SEO 키워드를 넣기 위해 visible UI의 H1, 히어로 구조, 브랜드 구조를 바꾸지 않는다.
- 메타 태그에는 게임명을 포함할 수 있지만, 화면 첫 제목과 사이트 정체성은 `PangChu Studio` 공식 홈페이지 기준을 유지한다.
- 검색엔진 최적화 작업은 메타/링크/구조화 데이터/사이트맵 중심으로 수행하고, 레이아웃 재설계로 확장하지 않는다.

### 복구 기준
- 에이전트가 잘못해서 루트나 언어별 페이지를 게임 단독 랜딩페이지처럼 바꿨다면, 영어 루트의 PangChu Studio 공식 홈페이지 구조로 되돌린다.
- 복구 시 `privacy.html`, `terms.html`, `sitemap.xml`, `robots.txt`, `app-ads.txt`는 직접 관련이 없으면 건드리지 않는다.
- 복구 완료 보고에는 각 언어 페이지의 H1, Featured Game 앱명, 섹션 순서 일치 여부를 반드시 포함한다.

### 작업 전 확인
- index 계열 페이지를 수정하기 전, 먼저 영어 루트 `/`의 현재 구조를 기준으로 삼는다.
- 사용자가 "홈페이지 기준", "EN 기준", "루트 기준"이라고 말하면 `https://bypangs.github.io/pangchu-privacy/`의 UI 구조를 기준으로 판단한다.
- 로컬 파일만 보고 구조를 재해석하지 말고, 가능하면 라이브 페이지의 현재 UI 의도를 우선한다.
