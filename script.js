document.addEventListener('DOMContentLoaded', () => {

  // ── Loading screen ──────────────────────────────────────────────────
  setTimeout(() => {
    document.getElementById('loadingScreen')?.classList.add('hidden');
  }, 800);

  // ── Header scroll ───────────────────────────────────────────────────
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Mobile menu ─────────────────────────────────────────────────────
  const toggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ── Active nav on scroll ────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  // ── Smooth scroll anchors ───────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── Reveal on scroll ────────────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => io.observe(el));

  // ── Portfolio Carousel (mobile) ─────────────────────────────────────
  (function initCarousel() {
    const carousel = document.getElementById('portfolioCarousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-item');
    const dots = carousel.querySelectorAll('.carousel-indicators button');
    const prev = carousel.querySelector('.carousel-control-prev');
    const next = carousel.querySelector('.carousel-control-next');

    if (!track || !slides.length) return;

    let idx = 0;
    let timer = null;
    let dragStart = 0;
    let dragging = false;

    const goTo = i => {
      idx = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle('active', j === idx));
    };

    const start = () => { timer = setInterval(() => goTo(idx + 1), 4000); };
    const stop = () => { clearInterval(timer); timer = null; };
    const reset = () => { stop(); start(); };

    prev?.addEventListener('click', () => { goTo(idx - 1); reset(); });
    next?.addEventListener('click', () => { goTo(idx + 1); reset(); });
    dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.slide); reset(); }));

    track.addEventListener('touchstart', e => { dragStart = e.touches[0].clientX; dragging = true; stop(); }, { passive: true });
    track.addEventListener('touchend', e => {
      if (!dragging) return;
      const diff = dragStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(idx + (diff > 0 ? 1 : -1));
      dragging = false;
      start();
    }, { passive: true });

    goTo(0);
    start();
  })();

  // ── Contact form reset ──────────────────────────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', () => { el.style.borderColor = ''; });
    });
  }
});
