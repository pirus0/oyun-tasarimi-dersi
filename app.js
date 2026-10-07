/*
 * MOTOR — Oyun Tasarımı Dersi
 * ------------------------------------------------
 * Bu dosya sadece görünüm/navigasyon mantığını içerir. Slayt METNİ burada
 * değil, content.js içindeki WEEKS dizisindedir. Bu dosyada ek olarak:
 *   - küçük düz (flat) SVG ikon kütüphanesi (SHAPES),
 *   - "Oyun Örnekleri" maddelerindeki oyun adına göre renkli ikon eşleştirme,
 *   - her hafta ve her slayt tipi için tema (renk + ikon) tanımları
 * bulunur. Marka kuralı: emoji kullanılmaz, sadece çizgi/flat SVG ikonlar.
 */

(function () {
  "use strict";

  const INK = "#17181C";

  // ---- Düz (flat) ikon şekilleri: viewBox 0 0 24 24, siyah kontur + renkli dolgu ----
  const SHAPES = {
    flag: (c) => `<path d="M6 3v18" stroke="${INK}" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M6 4h11l-2.5 4L17 12H6z" fill="${c}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>`,
    lightbulb: (c) => `<path d="M9 21h6M10 23h4" stroke="${INK}" stroke-width="1.6" stroke-linecap="round" fill="none"/><path d="M12 2a7 7 0 0 0-4 12.7c.5.4.8 1 .8 1.6V17h6.4v-.7c0-.6.3-1.2.8-1.6A7 7 0 0 0 12 2z" fill="${c}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>`,
    controller: (c) => `<rect x="2" y="8" width="20" height="10" rx="5" fill="${c}" stroke="${INK}" stroke-width="1.6"/><path d="M7 11v4M5 13h4" stroke="${INK}" stroke-width="1.6" stroke-linecap="round" fill="none"/><circle cx="16" cy="12" r="1.1" fill="${INK}"/><circle cx="18.2" cy="14.2" r="1.1" fill="${INK}"/>`,
    question: (c) => `<circle cx="12" cy="12" r="10" fill="${c}" stroke="${INK}" stroke-width="1.6"/><path d="M9.3 9.8a2.8 2.8 0 1 1 3.9 2.6c-.8.4-1.2 1-1.2 1.9v.3" stroke="${INK}" stroke-width="1.6" stroke-linecap="round" fill="none"/><circle cx="12" cy="17.3" r="1" fill="${INK}"/>`,
    notebook: (c) => `<rect x="4" y="3" width="16" height="18" rx="2" fill="${c}" stroke="${INK}" stroke-width="1.6"/><path d="M8 8h8M8 12h8M8 16h5" stroke="${INK}" stroke-width="1.4" stroke-linecap="round" fill="none"/><circle cx="4.6" cy="6" r="0.9" fill="${INK}"/><circle cx="4.6" cy="12" r="0.9" fill="${INK}"/><circle cx="4.6" cy="18" r="0.9" fill="${INK}"/>`,
    cube: (c) => `<path d="M12 2 21 7v10l-9 5-9-5V7z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 2v10M3 7l9 5 9-5" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round" fill="none"/>`,
    card: (c) => `<rect x="4" y="2" width="16" height="20" rx="2.5" fill="${c}" stroke="${INK}" stroke-width="1.6"/><path d="M8 6h2v2H8z" fill="#fff" stroke="${INK}" stroke-width="1.1"/><circle cx="16" cy="16" r="2.6" fill="#fff" stroke="${INK}" stroke-width="1.3"/>`,
    bean: (c) => `<path d="M12 3.2c3.9 0 6.4 3.1 6.4 7.9s-2.5 9.9-6.4 9.9-6.4-5.1-6.4-9.9S8.1 3.2 12 3.2z" fill="${c}" stroke="${INK}" stroke-width="1.6"/><path d="M6.5 9.2c0-2.2 2.3-3.6 5.5-3.6s5.5 1.4 5.5 3.6c0 .9-.5 1.4-1.4 1.4H7.9c-.9 0-1.4-.5-1.4-1.4z" fill="#dff4ff" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/>`,
    bird: (c) => `<ellipse cx="11" cy="13" rx="7" ry="6.2" fill="${c}" stroke="${INK}" stroke-width="1.6"/><path d="M17.3 11.6l4-1.4-1 3.7z" fill="#F5B93E" stroke="${INK}" stroke-width="1.2" stroke-linejoin="round"/><path d="M6 13c1.6-1.8 3.8-1.8 5 .2" stroke="${INK}" stroke-width="1.3" fill="none" stroke-linecap="round"/><circle cx="14" cy="10.2" r="1.1" fill="${INK}"/>`,
    runner: (c) => `<circle cx="15" cy="5" r="2.1" fill="${c}" stroke="${INK}" stroke-width="1.4"/><path d="M14.3 8l-1.3 5 3 2.3-1 5.7M13 13.3l-5 1.4M10.3 13l2.7-6" stroke="${INK}" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    gem: (c) => `<path d="M6 9l3-6h6l3 6-6 12z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 9h12M9 3l3 6 3-6" stroke="${INK}" stroke-width="1.1" fill="none" stroke-linejoin="round"/>`,
    star: (c) => `<path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/>`,
    pawn: (c) => `<circle cx="12" cy="7" r="2.5" fill="${c}" stroke="${INK}" stroke-width="1.5"/><path d="M9 20c-.3-3.7 1.1-6.9 3-8.3 1.9 1.4 3.3 4.6 3 8.3z" fill="${c}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/><rect x="7" y="19.4" width="10" height="2.2" rx="1.1" fill="${c}" stroke="${INK}" stroke-width="1.4"/>`,
    shieldCrown: (c) => `<path d="M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 9.2l1.4 1.7L12 8.2l1.6 2.7 1.4-1.7v2.8H9z" fill="#fff" stroke="${INK}" stroke-width="1" stroke-linejoin="round"/>`,
    mushroom: (c) => `<path d="M4 11a8 6 0 0 1 16 0z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8.6" cy="8.6" r="1.1" fill="#fff" stroke="${INK}" stroke-width="0.9"/><circle cx="14.2" cy="7.1" r="1.3" fill="#fff" stroke="${INK}" stroke-width="0.9"/><path d="M9 11v6a3 3 0 0 0 6 0v-6" fill="#fbe8cc" stroke="${INK}" stroke-width="1.6"/>`,
    speed: (c) => `<circle cx="10.5" cy="12" r="6.3" fill="${c}" stroke="${INK}" stroke-width="1.7"/><circle cx="10.5" cy="12" r="2.6" fill="none" stroke="${INK}" stroke-width="1.3"/><path d="M17.5 9h4M18.5 12h4.5M17.5 15h4" stroke="${INK}" stroke-width="1.8" stroke-linecap="round" fill="none"/>`,
    spike: (c) => `<g transform="translate(0,-2)"><path d="M2 18h20" stroke="${INK}" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M3 18l3.2-8L9.4 18M9.4 18l3.2-8 3.2 8M15.8 18l2.3-6 2.3 6" fill="${c}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/></g>`,
    triforce: (c) => `<path d="M12 4L7.5 12H16.5Z" fill="${c}" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/><path d="M3 20L7.5 12L12 20Z" fill="${c}" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/><path d="M12 20L16.5 12L21 20Z" fill="${c}" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/>`,
    building: (c) => `<rect x="5" y="4" width="14" height="17" fill="${c}" stroke="${INK}" stroke-width="1.6"/><path d="M8 8h2M8 11.3h2M8 14.6h2M14 8h2M14 11.3h2M14 14.6h2" stroke="${INK}" stroke-width="1.2" fill="none"/><rect x="10" y="17" width="4" height="4" fill="#fff" stroke="${INK}" stroke-width="1.1"/>`,
    people: (c) => `<circle cx="9" cy="8" r="3" fill="${c}" stroke="${INK}" stroke-width="1.5"/><circle cx="16.2" cy="9" r="2.6" fill="#fff" stroke="${INK}" stroke-width="1.3"/><path d="M3.4 20c0-3.3 2.5-5.6 5.6-5.6s5.6 2.3 5.6 5.6M13.3 20c.2-2.4 1.7-4.2 3.6-4.6" stroke="${INK}" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
    target: (c) => `<circle cx="12" cy="12" r="9.2" fill="${c}" stroke="${INK}" stroke-width="1.6"/><circle cx="12" cy="12" r="5.1" fill="#fff" stroke="${INK}" stroke-width="1.3"/><circle cx="12" cy="12" r="1.6" fill="${INK}"/>`,
    puzzle: (c) => `<g transform="translate(2,0)"><path d="M4 4h6v2.2a1.7 1.7 0 1 0 0 3.4V4h6v6.2a1.7 1.7 0 1 1 0 3.4V20h-6v-2.2a1.7 1.7 0 1 0 0-3.4V20H4v-6.2a1.7 1.7 0 1 1 0-3.4z" fill="${c}" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/></g>`,
    map: (c) => `<path d="M4 5l5-2 6 2 5-2v16l-5 2-6-2-5 2z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 3v16M15 5v16" stroke="${INK}" stroke-width="1.2" fill="none"/><circle cx="16.5" cy="10" r="1.3" fill="#ff4757" stroke="${INK}" stroke-width="0.9"/>`,
    palette: (c) => `<path d="M12 3a9 8 0 1 0 0 16c1 0 1.7-.6 1.7-1.4 0-.4-.2-.7-.2-1.1 0-.9.8-1.4 1.7-1.4H17c2.2 0 4-1.6 4-4C21 6.6 17 3 12 3z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8.3" cy="9.6" r="1.2" fill="#fff" stroke="${INK}" stroke-width="0.9"/><circle cx="12.5" cy="7.3" r="1.2" fill="#fff" stroke="${INK}" stroke-width="0.9"/><circle cx="16" cy="9.6" r="1.2" fill="#fff" stroke="${INK}" stroke-width="0.9"/>`,
    screen: (c) => `<rect x="3" y="4" width="18" height="13" rx="2" fill="${c}" stroke="${INK}" stroke-width="1.6"/><rect x="6" y="19" width="5" height="1.7" rx="0.8" fill="${INK}"/><rect x="13" y="19" width="5" height="1.7" rx="0.8" fill="${INK}"/><rect x="6" y="8" width="8" height="2.2" rx="1.1" fill="#fff" stroke="${INK}" stroke-width="0.9"/><rect x="6" y="11.6" width="5" height="2.2" rx="1.1" fill="#fff" stroke="${INK}" stroke-width="0.9"/>`,
    bookQuest: (c) => `<path d="M12 5.2c-1.8-1.3-4.6-1.8-8-1v14c3.4-.8 6.2-.3 8 1 1.8-1.3 4.6-1.8 8-1v-14c-3.4-.8-6.2-.3-8 1z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 5.2v14" stroke="${INK}" stroke-width="1.3" fill="none"/>`,
    megaphone: (c) => `<path d="M3 10v4l4 1 8 4V5L7 9z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M15 8a4 4 0 0 1 0 8" stroke="${INK}" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M6.4 15.2l1 5.3h2.2l-.6-4.7" fill="#fff" stroke="${INK}" stroke-width="1.2" stroke-linejoin="round"/>`,
    document: (c) => `<path d="M6 2h9l4 4v16H6z" fill="${c}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 2v4h5" fill="none" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/><path d="M9 11.5h7M9 14.5h7M9 17.5h4" stroke="${INK}" stroke-width="1.2" stroke-linecap="round" fill="none"/>`,
  };

  function icon(name, color, extraClass) {
    const build = SHAPES[name] || SHAPES.controller;
    return `<svg class="icon${extraClass ? " " + extraClass : ""}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${build(color)}</svg>`;
  }

  function iconChip(name, color, size) {
    const cls = size === "sm" ? "icon-chip icon-chip-sm" : "icon-chip";
    return `<span class="${cls}">${icon(name, color)}</span>`;
  }

  // ---- Slayt tipine göre rozet metni + ikon/renk ----
  const BADGE_BY_TYPE = {
    intro: { label: "Ders Haritası", icon: "flag", color: "#5A4FE0" },
    concept: { label: "Kavram", icon: "lightbulb", color: "#F5B93E" },
    examples: { label: "Oyun Örnekleri", icon: "controller", color: "#FF5A36" },
    questions: { label: "Sınıfa Sorular", icon: "question", color: "#22B8A8" },
    homework: { label: "Ödev", icon: "notebook", color: "#FF4757" },
    template: { label: "GDD Şablonu", icon: "document", color: "#5B6472" },
    summary: { label: "Terim Sözlüğü", icon: "bookQuest", color: "#5A4FE0" },
    section: { label: "Bölüm", icon: "map", color: "#5A4FE0" },
    extra: { label: "Ek Bilgi", icon: "lightbulb", color: "#8A8B93" },
    gallery: { label: "Görseller", icon: "lightbulb", color: "#F5B93E" },
  };

  // Tüm slaytlar tek kolon: dev ikon paneli içerik alanını yarıya düşürüyordu.
  const SPLIT_TYPES = new Set();

  // ---- "Oyun Örnekleri" maddesindeki oyun adına göre ikon/renk eşleştirme ----
  // "img" varsa gerçek oyun logosu (assets/games/) gösterilir; yoksa düz ikona düşer.
  const GAME_ICON_RULES = [
    { m: "minecraft", icon: "cube", color: "#4CAF6D", img: "assets/games/minecraft.png" },
    { m: "roblox", icon: "cube", color: "#FF4757", img: "assets/games/roblox.png" },
    { m: "uno", icon: "card", color: "#FF4757", img: "assets/games/uno.png" },
    { m: "among us", icon: "bean", color: "#33C4E0", img: "assets/games/amongus.png" },
    { m: "fall guys", icon: "bean", color: "#8B5CF6", img: "assets/games/fallguys.png" },
    { m: "flappy bird", icon: "bird", color: "#F5B93E", img: "assets/games/flappybird.png" },
    { m: "angry birds", icon: "bird", color: "#FF4757", img: "assets/games/angrybirds.png" },
    { m: "temple run", icon: "runner", color: "#FF5A36", img: "assets/games/templerun.png" },
    { m: "subway surfers", icon: "runner", color: "#3E8EF7", img: "assets/games/subwaysurfers.png" },
    { m: "candy crush", icon: "gem", color: "#FF6FA5", img: "assets/games/candycrush.png" },
    { m: "genshin", icon: "star", color: "#8B5CF6", img: "assets/games/genshin.png" },
    { m: "satranç", icon: "pawn", color: "#5B6472" },
    { m: "clash royale", icon: "shieldCrown", color: "#F5B93E", img: "assets/games/clashroyale.png" },
    { m: "fortnite", icon: "shieldCrown", color: "#3E8EF7", img: "assets/games/fortnite.png" },
    { m: "mario", icon: "mushroom", color: "#FF4757", img: "assets/games/mario.png" },
    { m: "sonic", icon: "speed", color: "#2FD1C5", img: "assets/games/sonic.png" },
    { m: "geometry dash", icon: "spike", color: "#4CAF6D", img: "assets/games/geometrydash.png" },
    { m: "zelda", icon: "triforce", color: "#4CAF6D" },
    { m: "ubisoft", icon: "building", color: "#5B6472", img: "assets/games/ubisoft.png" },
    { m: "riot", icon: "building", color: "#5B6472", img: "assets/games/riot.png" },
    { m: "gamejam", icon: "people", color: "#2FD1C5" },
  ];
  const GAME_ICON_FALLBACK = { icon: "controller", color: "#8B5CF6" };

  function gameIconFor(name) {
    const lower = name.toLowerCase();
    for (const rule of GAME_ICON_RULES) {
      if (lower.includes(rule.m)) return rule;
    }
    return GAME_ICON_FALLBACK;
  }

  // Görseli varsa <img>, yoksa düz SVG ikonu döner — ikisi de aynı çip kutusuna oturur.
  // Görsel yüklenemezse (dosya eksikse) sessizce düz ikona düşer.
  function gameChip(match, size) {
    const cls = size === "sm" ? "icon-chip icon-chip-sm" : "icon-chip";
    if (match.img) {
      return `<span class="${cls} icon-chip-img" data-fallback-icon="${match.icon}" data-fallback-color="${match.color}"><img src="${match.img}" alt="" loading="lazy"/></span>`;
    }
    return iconChip(match.icon, match.color, size);
  }

  // Görsel yüklenemezse çipin içeriğini düz ikonla değiştirir (event delegation).
  document.addEventListener(
    "error",
    (e) => {
      const img = e.target;
      if (!(img instanceof HTMLImageElement)) return;
      const chip = img.closest(".icon-chip-img");
      if (!chip) return;
      const name = chip.getAttribute("data-fallback-icon") || "controller";
      const color = chip.getAttribute("data-fallback-color") || "#8B5CF6";
      chip.innerHTML = icon(name, color);
      chip.classList.remove("icon-chip-img");
    },
    true
  );

  // ---- Ana sayfa hafta kartları: pastel zemin + konu ikonu ----
  const PASTEL_CYCLE = [
    "var(--pastel-peach)",
    "var(--pastel-mint)",
    "var(--pastel-sky)",
    "var(--pastel-lavender)",
    "var(--pastel-rose)",
    "var(--pastel-cream)",
  ];

  const WEEK_TOPIC_ICON = {
    "0": { icon: "flag", color: "#5A4FE0" },
    "1.1": { icon: "people", color: "#22B8A8" },
    "1.2": { icon: "lightbulb", color: "#F5B93E" },
    "2.1": { icon: "target", color: "#FF5A36" },
    "2.2": { icon: "puzzle", color: "#8B5CF6" },
    "3.1": { icon: "star", color: "#FF6FA5" },
    "3.2": { icon: "map", color: "#4CAF6D" },
    "4.1": { icon: "bean", color: "#33C4E0" },
    "4.2": { icon: "palette", color: "#FF6FA5" },
    "5.1": { icon: "screen", color: "#3E8EF7" },
    "5.2": { icon: "bookQuest", color: "#F5B93E" },
    "6.1": { icon: "document", color: "#5B6472" },
    "6.2": { icon: "megaphone", color: "#FF5A36" },
    "7.1": { icon: "document", color: "#22B8A8" },
  };

  // ---- Durum ----
  const state = { weekIndex: null, slideIndex: 0 };

  // ---- DOM referansları ----
  const homeScreen = document.getElementById("home-screen");
  const slideScreen = document.getElementById("slide-screen");
  const weekGrid = document.getElementById("week-grid");
  const weekLabel = document.getElementById("week-label");
  const slideCard = document.getElementById("slide-card");
  const slideDots = document.getElementById("slide-dots");
  const btnBack = document.getElementById("btn-back");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnNextLabel = document.getElementById("btn-next-label");
  const btnFullscreen = document.getElementById("btn-fullscreen");

  // ---- Ana sayfa: WEEKS dizisini "1.1"/"1.2" gibi id'lerin nokta öncesine
  //      göre 6 hafta grubuna toplar; her grup 2 oturum (session) içerir. ----
  function groupWeeksBySection() {
    const groups = [];
    const indexBySection = new Map();
    WEEKS.forEach((week, index) => {
      const section = String(week.id).split(".")[0];
      if (!indexBySection.has(section)) {
        indexBySection.set(section, groups.length);
        groups.push({ section, sessions: [] });
      }
      groups[indexBySection.get(section)].sessions.push({ week, index });
    });
    return groups;
  }

  function renderWeekGrid() {
    weekGrid.innerHTML = "";
    const groups = groupWeeksBySection();

    groups.forEach((group, groupPos) => {
      const bg = PASTEL_CYCLE[groupPos % PASTEL_CYCLE.length];
      const totalSlides = group.sessions.reduce((sum, s) => sum + s.week.slides.length, 0);

      const sessionsHtml = group.sessions
        .map(({ week, index }) => {
          const topic = WEEK_TOPIC_ICON[week.id] || { icon: "controller", color: "#8B5CF6" };
          return `
            <button type="button" class="session-btn" data-index="${index}">
              ${iconChip(topic.icon, topic.color, "sm")}
              <span class="session-btn-text">
                <span class="session-btn-id">${escapeHtml(String(week.id))}</span>
                <span class="session-btn-title">${escapeHtml(week.title)}</span>
              </span>
              <span class="session-btn-meta">${week.slides.length} sayfa</span>
            </button>
          `;
        })
        .join("");

      const groupEl = document.createElement("div");
      groupEl.className = "week-group";
      groupEl.style.setProperty("--card-bg", bg);
      groupEl.innerHTML = `
        <div class="week-group-header">
          <span class="week-group-number">HAFTA ${escapeHtml(group.section)}</span>
          <span class="week-group-meta">${icon("controller", "#17181C")}<span>${totalSlides} sayfa · ${group.sessions.length} oturum</span></span>
        </div>
        <div class="week-group-sessions">${sessionsHtml}</div>
      `;
      groupEl.querySelectorAll(".session-btn").forEach((btn) => {
        btn.addEventListener("click", () => openWeek(Number(btn.dataset.index)));
      });
      weekGrid.appendChild(groupEl);
    });
  }

  // ---- Haftayı aç ----
  function openWeek(weekIndex) {
    state.weekIndex = weekIndex;
    state.slideIndex = 0;
    homeScreen.classList.remove("is-active");
    slideScreen.classList.add("is-active");
    renderSlide();
  }

  // ---- Hafta listesine dön ----
  function closeWeek() {
    slideScreen.classList.remove("is-active");
    homeScreen.classList.add("is-active");
    state.weekIndex = null;
  }

  // ---- Aktif slaytı çiz ----
  function renderSlide() {
    const week = WEEKS[state.weekIndex];
    const slide = week.slides[state.slideIndex];
    const total = week.slides.length;
    const badge = BADGE_BY_TYPE[slide.type] || BADGE_BY_TYPE.concept;
    const isSplit = SPLIT_TYPES.has(slide.type);

    weekLabel.textContent = `Hafta ${week.id}: ${week.title} — Sayfa ${state.slideIndex + 1}/${total}`;

    slideCard.setAttribute("data-type", slide.type);
    slideCard.setAttribute("data-layout", isSplit ? "split" : "single");

    // Bölüm bağlamı: bu slayttan önceki son "section" slaytı ve kaçıncı bölüm olduğu.
    let sectionNo = 0;
    let sectionTitle = "";
    for (let i = 0; i <= state.slideIndex; i++) {
      if (week.slides[i].type === "section") {
        sectionNo += 1;
        sectionTitle = week.slides[i].heading;
      }
    }
    // Ek bilgi bölümündeki ara görsel sayfaları "extra: true" ile işaretlenir.
    const isExtra = slide.type === "extra" || slide.extra === true;
    const inSection = sectionNo > 0 && !["intro", "summary", "homework"].includes(slide.type);
    const badgeHtml =
      slide.type === "section"
        ? `<div class="section-number">Bölüm ${sectionNo}</div>`
        : inSection
        ? `<div class="slide-badge slide-crumb${isExtra ? " is-extra" : ""}"><span>${isExtra ? "Ek bilgi" : `Bölüm ${sectionNo} · ${escapeHtml(sectionTitle)}`}</span></div>`
        : `<div class="slide-badge">${icon(badge.icon, badge.color)}<span>${badge.label}</span></div>`;

    let bodyHtml;
    if (slide.type === "examples" && slide.items) {
      bodyHtml = `<ul class="example-list">${slide.items.map(renderExampleItem).join("")}</ul>`;
    } else if (slide.type === "template") {
      bodyHtml = `
        <div class="template-block">
          <div class="template-row template-guidance">
            <span class="template-row-label">${icon("target", "#5B6472")}Neye göre yazılır?</span>
            <p>${escapeHtml(slide.guidance)}</p>
          </div>
          <div class="template-row template-example">
            <span class="template-row-label">${icon("lightbulb", "#F5B93E")}Örnek — Flappy Bird</span>
            <p>${escapeHtml(slide.example)}</p>
          </div>
        </div>
      `;
    } else {
      bodyHtml = renderBlocks(slide);
    }

    const downloadHtml = slide.download
      ? `<a class="download-btn" href="${escapeHtml(slide.download.href)}" download>${icon("document", "#fff")}<span>${escapeHtml(slide.download.label)}</span></a>`
      : "";

    const contentHtml = `
      <div class="slide-content">
        ${badgeHtml}
        <h2 class="slide-heading">${escapeHtml(slide.heading)}</h2>
        ${bodyHtml}
        ${downloadHtml}
      </div>
    `;

    let illustrationHtml = "";
    if (isSplit) {
      illustrationHtml = `
        <div class="slide-illustration">
          <div class="slide-illustration-ghost">${escapeHtml(badge.label.split(" ")[0])}</div>
          <div class="illustration-badge">${icon(badge.icon, badge.color)}</div>
        </div>
      `;
    }

    // Gerçek görsel (oyun ekran görüntüsü, fotoğraf): sağ kolonda, altında kaynak satırı.
    let figureHtml = "";
    if (slide.image) {
      slideCard.setAttribute("data-layout", "figure");
      figureHtml = `
        <figure class="slide-figure">
          <img src="${escapeHtml(slide.image.src)}" alt="${escapeHtml(slide.image.caption)}" />
          <figcaption>${escapeHtml(slide.image.caption)}<span class="figure-credit">${escapeHtml(slide.image.credit)}</span></figcaption>
        </figure>
      `;
    }

    slideCard.innerHTML = contentHtml + illustrationHtml + figureHtml;

    renderDots(total);
    updateControls(total);
  }

  // Ders anlatımı blokları; slaytta hangisi varsa bu sırayla çizilir:
  // lead (paragraf), quote, gallery, terms, table, steps, bullets, bridge.
  function renderBlocks(slide) {
    let html = "";
    if (slide.lead) {
      const paras = Array.isArray(slide.lead) ? slide.lead : [slide.lead];
      html += paras.map((p) => `<p class="slide-lead">${escapeHtml(p)}</p>`).join("");
    }
    if (slide.quote) {
      html += `
        <blockquote class="slide-quote">
          <p>${escapeHtml(slide.quote.text)}</p>
          <cite>${escapeHtml(slide.quote.source)}</cite>
        </blockquote>
      `;
    }
    // Ara görsel sayfası: 1-4 görsel yan yana, her birinin altında açıklama ve kaynak.
    if (slide.gallery) {
      html += `<div class="slide-gallery" style="--n:${slide.gallery.length}">${slide.gallery
        .map(
          (g) => `
            <figure>
              <img src="${escapeHtml(g.src)}" alt="${escapeHtml(g.caption)}" />
              <figcaption>${escapeHtml(g.caption)}<span class="figure-credit">${escapeHtml(g.credit)}</span></figcaption>
            </figure>
          `
        )
        .join("")}</div>`;
    }
    if (slide.terms) {
      html += `<dl class="term-list${slide.terms.length >= 6 ? " term-list-grid" : ""}">${slide.terms
        .map(
          (t) => `
            <div class="term-row">
              <dt>${escapeHtml(t.term)}${t.en ? `<span class="term-en">${escapeHtml(t.en)}</span>` : ""}</dt>
              <dd>${escapeHtml(t.def)}</dd>
            </div>
          `
        )
        .join("")}</dl>`;
    }
    if (slide.table) {
      const head = slide.table.head.map((h) => `<th>${escapeHtml(h)}</th>`).join("");
      const rows = slide.table.rows
        .map((r) => `<tr>${r.map((c) => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`)
        .join("");
      html += `<div class="table-wrap"><table class="slide-table${slide.table.rows.length >= 8 ? " slide-table-dense" : ""}"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    if (slide.steps) {
      html += `<ol class="step-list">${slide.steps
        .map((s) => `<li><strong>${escapeHtml(s.label)}</strong><span>${escapeHtml(s.text)}</span></li>`)
        .join("")}</ol>`;
    }
    if (slide.bullets) {
      html += `<ul class="slide-list">${slide.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
    }
    // Köprü: bu sayfanın bir sonraki sayfaya nasıl bağlandığını söyleyen kapanış satırı.
    if (slide.bridge) {
      html += `<p class="slide-bridge"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${escapeHtml(slide.bridge)}</span></p>`;
    }
    return html;
  }

  // "Oyun Adı: açıklama" formatındaki maddeyi renkli ikonlu rozet kartına dönüştürür.
  function renderExampleItem(text) {
    const sepIndex = text.indexOf(":");
    let name = text;
    let rest = "";
    if (sepIndex > -1) {
      name = text.slice(0, sepIndex).trim();
      rest = text.slice(sepIndex + 1).trim();
    }
    const match = gameIconFor(name);
    const inner = rest
      ? `<strong>${escapeHtml(name)}:</strong> ${escapeHtml(rest)}`
      : escapeHtml(name);
    return `<li class="example-item">${gameChip(match, "sm")}<span>${inner}</span></li>`;
  }

  function renderDots(total) {
    slideDots.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("span");
      dot.className = "slide-dot" + (i === state.slideIndex ? " is-current" : "");
      slideDots.appendChild(dot);
    }
  }

  function updateControls(total) {
    btnPrev.disabled = state.slideIndex === 0;
    const isLast = state.slideIndex === total - 1;
    btnNextLabel.textContent = isLast ? "Haftayı Bitir" : "İleri";
  }

  function nextSlide() {
    const week = WEEKS[state.weekIndex];
    const isLast = state.slideIndex === week.slides.length - 1;
    if (isLast) {
      closeWeek();
      return;
    }
    state.slideIndex++;
    renderSlide();
  }

  function prevSlide() {
    if (state.slideIndex === 0) return;
    state.slideIndex--;
    renderSlide();
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Olay dinleyicileri ----
  btnBack.addEventListener("click", closeWeek);
  btnPrev.addEventListener("click", prevSlide);
  btnNext.addEventListener("click", nextSlide);
  btnFullscreen.addEventListener("click", toggleFullscreen);

  document.addEventListener("keydown", (e) => {
    const inSlideView = slideScreen.classList.contains("is-active");

    if (e.key === "f" || e.key === "F") {
      toggleFullscreen();
      return;
    }

    if (!inSlideView) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "Escape") {
      closeWeek();
    }
  });

  // ---- Başlat ----
  renderWeekGrid();
})();
