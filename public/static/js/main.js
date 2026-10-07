
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const ticker = document.querySelector(".ticker-track");
  if (ticker) {
    ticker.addEventListener("mouseenter", () => ticker.style.animationPlayState = "paused");
    ticker.addEventListener("mouseleave", () => ticker.style.animationPlayState = "running");
  }

  const reveal = [...document.querySelectorAll(".reveal")];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
  }, {threshold:.12});
  reveal.forEach(el => observer.observe(el));

  const counters = [...document.querySelectorAll("[data-count]")];
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = Number(el.dataset.count || 0), suffix = el.dataset.suffix || "";
      const start = performance.now(), duration = 1300;
      function tick(now) {
        const p = Math.min((now-start)/duration, 1), eased = 1-Math.pow(1-p,3);
        el.textContent = Math.round(target*eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, {threshold:.35});
  counters.forEach(el => countObserver.observe(el));

  const fill = document.getElementById("trlFill");
  const rail = document.getElementById("trlRail");
  if (fill && rail) {
    const trlObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fill.style.width = "100%";
        trlObserver.disconnect();
      }
    }, {threshold:.2});
    trlObserver.observe(rail);
  }

  const back = document.getElementById("backToTop");
  if (back) {
    window.addEventListener("scroll", () => back.classList.toggle("show", window.scrollY > 500), {passive:true});
    back.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
  }

  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, {rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s => activeObserver.observe(s));
});
