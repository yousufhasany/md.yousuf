const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function headerHTML(page) {
  const link = (href, id, label) =>
    `<a href="${href}" class="${page === id ? "active" : ""}">${label}</a>`;
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="index.html">You<span>suf</span></a>
        <nav class="nav" data-nav>
          ${link("index.html", "home", "Home")}
          ${link("about.html", "about", "About")}
          ${link("research.html", "research", "Research")}
          ${link("portfolio.html", "portfolio", "Projects")}
          ${link("experience.html", "experience", "Experience")}
          ${link("contact.html", "contact", "Contact")}
        </nav>
        <a class="btn btn-dark" href="contact.html">Contact</a>
        <button class="menu-toggle" type="button" aria-label="Open menu"><span></span></button>
      </div>
    </header>`;
}

function footerHTML() {
  return `
    <section class="cta-band">
      <div class="container">
        <div class="cta-inner">
          <div>
            <h2>Let’s work on something careful</h2>
            <p>Open to software development, research collaboration, and educational technology, with claims kept to what can be shown.</p>
          </div>
          <a class="btn btn-accent" href="contact.html">Get in touch</a>
        </div>
        <div class="footer-grid">
          <div>
            <a class="logo" href="index.html" style="color:#fff">You<span>suf</span></a>
            <p style="margin-top:14px">Md. Yousuf, CSE at Independent University, Bangladesh. Software development and deep learning research.</p>
            <p style="margin-top:10px"><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></p>
            <p><a href="tel:${PROFILE.phone}">${PROFILE.phoneLabel}</a></p>
          </div>
          <div>
            <h3>Quick links</h3>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="research.html">Research</a>
            <a href="portfolio.html">Projects</a>
            <a href="experience.html">Experience</a>
            <a href="contact.html">Contact</a>
          </div>
          <div>
            <h3>Elsewhere</h3>
            <a href="mailto:${PROFILE.email}">Email</a>
            <a href="tel:${PROFILE.phone}">Phone</a>
            <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
            <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
            <a href="${PROFILE.thesis}" target="_blank" rel="noopener">IUB thesis</a>
            <a href="${PROFILE.ieee}" target="_blank" rel="noopener">IEEE Xplore</a>
          </div>
        </div>
        <div class="legal">
          <span>© ${new Date().getFullYear()} Md. Yousuf. All rights reserved.</span>
          <span>Bangladesh</span>
        </div>
      </div>
    </section>`;
}

function workCard(project) {
  const href = project.href || `work.html?id=${project.id}`;
  const media = project.image
    ? `<div class="media shine${project.imageFit === "contain" ? " media-ct" : ""}"><img src="${project.image}" alt="${project.imageAlt || project.title}"><span class="media-tag">${project.level}</span></div>`
    : `<div class="media media-panel media-${project.tone || "navy"}"><span>${project.level}</span></div>`;
  return `
    <article class="work-card">
      <a href="${href}">
        ${media}
        <div class="card-body">
          <div>
            <div class="card-meta">${project.category}</div>
            <h3>${project.title}</h3>
          </div>
          <span class="arrow">↗</span>
        </div>
      </a>
    </article>`;
}

function param(name) {
  return new URLSearchParams(location.search).get(name);
}

function renderWork() {
  const mount = $("[data-work]");
  if (!mount) return;
  const project = PROJECTS.find((p) => p.id === param("id")) || PROJECTS[0];
  const related = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);
  document.title = `${project.title} - Md. Yousuf`;
  const extraLink = project.link
    ? `<a class="btn btn-dark" style="margin-top:22px;width:100%" href="${project.link}" target="_blank" rel="noopener">${project.linkLabel || "Open link"}</a>
        <a class="btn btn-line" style="margin-top:12px;width:100%" href="contact.html">Discuss this work</a>`
    : `<a class="btn btn-dark" style="margin-top:22px;width:100%" href="contact.html">Discuss this work</a>`;
  const coverClass = project.image ? " work-hero-cover" : "";
  const coverStyle = project.image
    ? ` style="background-image:linear-gradient(180deg, rgba(3,39,55,.28), rgba(3,39,55,.6)), url('${project.image}')"`
    : "";
  const heroPhoto = project.image
    ? ""
    : `<img class="work-hero-photo" src="images/yousuf-about.jpg" alt="Md. Yousuf">`;
  const galleryMedia = (g, project) => {
    if (g.type === "video") {
      const poster = g.poster ? ` poster="${g.poster}"` : "";
      return `<video controls playsinline preload="metadata"${poster}><source src="${g.src}" type="video/mp4">${g.alt || project.title}</video>`;
    }
    return `<img src="${g.src}" alt="${g.alt || project.title}">`;
  };
  const shot = (project.gallery && project.gallery.length)
    ? project.gallery.map((g) => `<figure class="project-figure${g.fit === "contain" ? " figure-contain" : ""}${g.type === "video" ? " figure-video" : ""}">${galleryMedia(g, project)}${g.caption ? `<figcaption>${g.caption}</figcaption>` : ""}</figure>`).join("")
    : project.image
      ? `<figure class="project-figure"><img src="${project.image}" alt="${project.imageAlt || project.title}">${project.imageCaption ? `<figcaption>${project.imageCaption}</figcaption>` : ""}</figure>`
      : "";
  const mapHtml = project.map
    ? `<h2>Planning questions</h2>
        <p>These questions are taken from the street lighting mindmap.</p>
        ${project.map.map((group) => `<h3>${group.heading}</h3><ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>`).join("")}`
    : "";
  const planHtml = project.plan
    ? `<h2>From the project PDF</h2>
        <p>These points follow the street lighting project PDF.</p>
        ${project.plan.map((group) => `<h3>${group.heading}</h3><ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>`).join("")}`
    : "";
  mount.innerHTML = `
    <section class="page-banner"><div class="container">
      <div class="work-hero media-${project.tone || "navy"}${coverClass}"${coverStyle}>
        <div>
          <span class="tag">${project.level}</span>
          <h1>${project.title}</h1>
        </div>
        ${heroPhoto}
      </div>
    </div></section>
    <section class="section"><div class="container detail-grid">
      <div class="detail-copy">
        <h2>Overview</h2>
        <p class="lead">${project.overview}</p>
        ${shot}
        ${planHtml}
        ${mapHtml}
        <h2>Scope</h2>
        <ul>${project.scope.map((o) => `<li>${o}</li>`).join("")}</ul>
        <h2>Approach</h2>
        <ul>${project.approach.map((o) => `<li>${o}</li>`).join("")}</ul>
        <p class="note">${project.note}</p>
      </div>
      <aside class="side-card">
        <h3>Details</h3>
        <dt>Organization</dt><dd>${project.org}</dd>
        ${project.slogan ? `<dt>Slogan</dt><dd>${project.slogan}</dd>` : ""}
        <dt>Category</dt><dd>${project.category}</dd>
        <dt>Stack / tools</dt><dd>${project.stack}</dd>
        ${extraLink}
      </aside>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-head"><p class="eyebrow">More</p><h2>Related work</h2></div>
      <div class="grid-2">${related.map(workCard).join("")}</div>
    </div></section>`;
}

function fillLists() {
  $$("[data-projects]").forEach((el) => {
    const count = Number(el.dataset.count) || PROJECTS.length;
    el.innerHTML = PROJECTS.slice(0, count).map(workCard).join("");
  });
}

function animateSkills(root = document) {
  $$(".bar span", root).forEach((bar) => {
    const value = bar.dataset.value;
    requestAnimationFrame(() => { bar.style.width = value + "%"; });
  });
}

function markReveal(el, side, delay) {
  if (!el || el.classList.contains("reveal") || el.matches("script, style, br")) return;
  if (el.parentElement && el.parentElement.closest(".reveal")) return;
  el.classList.add("reveal", `reveal-${side}`);
  el.style.setProperty("--d", `${delay || 0}ms`);
}

function tagGroup(sel, pattern) {
  $$(sel).forEach((group) => {
    const kids = [...group.children].filter((n) => n.nodeType === 1);
    kids.forEach((child, i) => {
      const side = pattern === "lcr" ? ["left", "center", "right"][i % 3] : i % 2 === 0 ? "left" : "right";
      markReveal(child, side, i * 200);
    });
  });
}

function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animateSkills();
    return;
  }

  markReveal($(".hero-copy"), "left", 0);
  markReveal($(".hero-portrait"), "center", 280);
  markReveal($(".hero-stats"), "right", 180);
  markReveal($(".banner-inner:not(.banner-cover)"), "center", 0);
  markReveal($(".work-hero"), "center", 0);
  markReveal($(".article-body"), "left", 0);
  markReveal($("form.form"), "right", 180);

  [".intro-grid", ".skills-wrap", ".about-hero", ".detail-grid", ".contact-grid", ".cta-inner", ".grid-2", ".quote-grid", ".steps", ".timeline"].forEach((sel) => tagGroup(sel, "lr"));
  [".footer-grid", ".grid-3", ".pricing"].forEach((sel) => tagGroup(sel, "lcr"));

  $$(".section-head").forEach((el) => markReveal(el, "left", 0));
  $$(".faq-item, .time-item, .info-card, .step").forEach((el, i) => {
    markReveal(el, i % 2 === 0 ? "left" : "right", (i % 4) * 160);
  });

  document.documentElement.classList.add("js-anim");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      if (entry.target.querySelector(".bar span")) animateSkills(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: "80px 0px 0px 0px" });

  $$(".reveal").forEach((el) => io.observe(el));

  requestAnimationFrame(() => {
    $$(".reveal").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.98) el.classList.add("in");
    });
  });

  setTimeout(() => {
    $$(".reveal").forEach((el) => el.classList.add("in"));
  }, 700);
}

function bindUI() {
  const toggle = $(".menu-toggle");
  const nav = $("[data-nav]");
  toggle?.addEventListener("click", () => nav.classList.toggle("open"));

  $$(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });

  $$("[data-contact], [data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status") || form.appendChild(Object.assign(document.createElement("div"), { className: "form-status" }));
      status.textContent = form.hasAttribute("data-newsletter")
        ? "You are on the list. I will send the next note, not a drip sequence."
        : "Noted in this browser only. For a real reply, email hyousuf266@gmail.com or call +880 1732-231661.";
      status.classList.add("show");
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  const headerMount = $("[data-header]");
  const footerMount = $("[data-footer]");
  if (headerMount) headerMount.outerHTML = headerHTML(page);
  if (footerMount) footerMount.outerHTML = footerHTML();
  fillLists();
  renderWork();
  bindUI();
  initReveal();
});
