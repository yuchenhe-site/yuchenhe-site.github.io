const page = document.body.dataset.page || "about";
const routes = {
  about: ["index.html", "About", "简介"],
  publications: ["publications.html", "Publications", "发表"],
  "working-papers": ["working-papers.html", "Working Papers", "工作论文"],
  experience: ["experience.html", "Experience", "经历"],
};

document.querySelector(".site-header").innerHTML = `
  <nav class="nav-shell" aria-label="Main navigation">
    <a class="site-mark" href="index.html" aria-label="Yuchen He homepage">
      <span class="mark-monogram">YH</span>
      <span class="mark-name"><span class="lang lang-en">Yuchen He</span><span class="lang lang-zh">何雨辰</span></span>
    </a>
    <div class="nav-right">
      <div class="nav-links">
        ${Object.entries(routes).map(([key, route]) => `<a class="${page === key ? "active" : ""}" href="${route[0]}"><span class="lang lang-en">${route[1]}</span><span class="lang lang-zh">${route[2]}</span></a>`).join("")}
      </div>
      <button class="language-toggle" type="button" aria-label="Switch language" aria-pressed="false">
        <span class="toggle-option" data-toggle-lang="zh">中文</span><span class="toggle-divider">/</span><span class="toggle-option" data-toggle-lang="en">EN</span>
      </button>
    </div>
  </nav>`;

document.querySelector(".profile-card").innerHTML = `
  <img class="profile-photo" src="assets/yuchen-he.jpg" alt="Portrait of Yuchen He" />
  <div class="profile-details">
    <p class="eyebrow"><span class="lang lang-en">Sociologist</span><span class="lang lang-zh">社会学研究者</span></p>
    <h2><span class="lang lang-en">Yuchen He</span><span class="lang lang-zh">何雨辰</span></h2>
    <p class="profile-role"><span class="lang lang-en">Ph.D. Candidate in Sociology</span><span class="lang lang-zh">社会学博士候选人</span></p>
    <ul class="profile-meta">
      <li><span class="meta-icon" aria-hidden="true">⌂</span><span class="lang lang-en">Beijing, China</span><span class="lang lang-zh">中国，北京</span></li>
      <li><span class="meta-icon" aria-hidden="true">◇</span><span class="lang lang-en">Peking University</span><span class="lang lang-zh">北京大学</span></li>
      <li><span class="meta-icon" aria-hidden="true">@</span><a href="mailto:yuchenhe@stu.pku.edu.cn">yuchenhe@stu.pku.edu.cn</a></li>
    </ul>
    <div class="profile-actions">
      <a class="button button-primary lang lang-en" href="assets/CV-Yuchen-He-English.pdf">Download CV</a>
      <a class="button button-primary lang lang-zh" href="assets/CV-He-Yuchen-Chinese.docx">下载简历</a>
      <a class="button button-secondary" href="https://scholar.google.com/citations?hl=zh-CN&amp;user=-XjJC-cAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
    </div>
  </div>`;

document.querySelector("footer").innerHTML = `
  <div><h2><span class="lang lang-en">Contact Me</span><span class="lang lang-zh">联系我</span></h2><p><a href="mailto:yuchenhe@stu.pku.edu.cn">yuchenhe@stu.pku.edu.cn</a></p></div>
  <p class="copyright">© <span id="current-year"></span> Yuchen He · <span class="lang lang-en">Last updated June 2026</span><span class="lang lang-zh">更新于 2026 年 6 月</span></p>`;

const toggle = document.querySelector(".language-toggle");
function setLanguage(language) {
  const isChinese = language === "zh";
  document.body.dataset.language = isChinese ? "zh" : "en";
  document.documentElement.lang = isChinese ? "zh-CN" : "en";
  toggle.setAttribute("aria-pressed", String(isChinese));
  localStorage.setItem("preferred-language", isChinese ? "zh" : "en");
}
toggle.addEventListener("click", () => setLanguage(document.body.dataset.language === "en" ? "zh" : "en"));
document.querySelector("#current-year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("preferred-language") || "en");
