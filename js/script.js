/* Fadhli Amin website: small, dependency-free script */
(function () {
  'use strict';

  // Mobile menu toggle
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  var menuLinks = document.querySelectorAll('#menu a');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });
  menuLinks.forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Active navigation state while scrolling
  var sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        menuLinks.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + entry.target.id;
          a.classList.toggle('active', on);
          if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  // Subtle shadow once the page is scrolled
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
})();

/* Lively layer: scroll progress bar + reveal-on-scroll */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress bar
  var bar = document.querySelector('.progress');
  function progress() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
  }
  window.addEventListener('scroll', progress, { passive: true });
  progress();

  // Reveal elements as they enter the screen
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  var targets = document.querySelectorAll(
    '.sec .label, .sec h2, .sub, .prose p, .snap, .areas > li, .job, .topics details, .contact .lead, .links > div, .step, .tile');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.setProperty('--d', (i % 3) * 0.08 + 's');
    io.observe(el);
  });
})();
