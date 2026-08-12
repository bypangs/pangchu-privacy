window.UPDATES_T = {
  "en": {
    "ann11.title": "MalangNyang Jump patch notes",
    "ann11.desc": "All version notes are collected in one post, with the newest update listed first.",
    "ann11.link": "View all patch notes",
    "ann10.title": "MalangNyang Jump game guide is now available",
    "ann10.desc": "A visual guide to growth stats, Luck, combos, Charge, coin rewards, and frequently asked questions is now available on the website.",
    "ann8.title": "Apple platforms updated to the latest version",
    "ann8.desc": "App Store review is complete, and version 1.4 is now available for iPhone, iPad, and Mac.",
    "ann.all": "View all updates",
    "ann.homeNote": "The homepage shows the four latest posts. Older posts are kept in the notice board."
  },
  "ko": {
    "ann11.title": "말랑냥이점프 패치노트",
    "ann11.desc": "버전별 변경 내용을 게시글 하나에 최신순으로 모아 확인할 수 있습니다.",
    "ann11.link": "전체 패치노트 보기",
    "ann10.title": "말랑냥이점프 게임 가이드 공개",
    "ann10.desc": "성장 스탯, 행운·콤보·차지, 코인 보상과 자주 묻는 질문을 한눈에 확인할 수 있는 게임 가이드를 홈페이지에 추가했습니다.",
    "ann8.title": "Apple 플랫폼 최신 업데이트 적용 완료",
    "ann8.desc": "App Store 심사가 완료되어 말랑냥이점프 1.4 업데이트를 iPhone·iPad·Mac에서 이용할 수 있습니다.",
    "ann.all": "전체 공지 보기",
    "ann.homeNote": "홈페이지에는 최신 4개만 표시하며, 이전 소식은 공지 게시판에 보관합니다."
  },
  "ja": {
    "ann11.title": "ぷにねこジャンプ パッチノート",
    "ann11.desc": "バージョンごとの変更内容を1つの記事に新しい順でまとめています。",
    "ann11.link": "すべてのパッチノートを見る",
    "ann10.title": "ぷにねこジャンプ ゲームガイドを公開",
    "ann10.desc": "成長ステータス、ラック・コンボ・チャージ、コイン報酬、よくある質問を見やすくまとめたゲームガイドを公式サイトに追加しました。",
    "ann8.title": "Appleプラットフォームに最新アップデートを適用",
    "ann8.desc": "App Storeの審査が完了し、ぷにねこジャンプ バージョン1.4をiPhone・iPad・Macで利用できます。",
    "ann.all": "すべてのお知らせを見る",
    "ann.homeNote": "ホームページには最新4件を表示し、過去のお知らせは掲示板に保管します。"
  },
  "zh": {
    "ann11.title": "啫喱貓跳跳更新紀錄",
    "ann11.desc": "所有版本的變更內容都集中在同一篇文章，並按最新版本排列。",
    "ann11.link": "查看完整更新紀錄",
    "ann10.title": "啫喱貓跳跳遊戲指南已公開",
    "ann10.desc": "網站已新增圖像化遊戲指南，方便查看成長屬性、幸運、連擊、蓄力、金幣獎勵及常見問題。",
    "ann8.title": "Apple 平台已完成最新版本更新",
    "ann8.desc": "App Store 審核已完成，啫喱貓跳跳 1.4 版本現可於 iPhone、iPad 及 Mac 使用。",
    "ann.all": "查看全部公告",
    "ann.homeNote": "首頁顯示最新4則消息，較早的內容會保留在公告板。"
  },
  "pt": {
    "ann11.title": "Notas de atualização de Gatinho Pula-Pula",
    "ann11.desc": "As mudanças de todas as versões ficam reunidas em uma única publicação, da mais recente para a mais antiga.",
    "ann11.link": "Ver todas as notas",
    "ann10.title": "Guia de Gatinho Pula-Pula publicado",
    "ann10.desc": "Adicionamos ao site um guia visual com atributos de evolução, Sorte, combos, Carga, moedas e perguntas frequentes.",
    "ann8.title": "Atualização mais recente disponível nas plataformas Apple",
    "ann8.desc": "A análise da App Store foi concluída, e a versão 1.4 de Gatinho Pula-Pula já está disponível para iPhone, iPad e Mac.",
    "ann.all": "Ver todas as atualizações",
    "ann.homeNote": "A página inicial mostra as quatro publicações mais recentes; as anteriores ficam no mural de avisos."
  }
};

document.querySelectorAll(".announce-accordion").forEach(item => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".announce-accordion[open]").forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});
