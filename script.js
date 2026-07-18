/* ============================================================
   REHAN HALAI — EDITORIAL PORTFOLIO
   JS Budget: local time ticker + scroll fade-in
   ============================================================ */

(function () {
  'use strict';

  /* --- 1. LIVE LOCAL TIME (Asia/Kolkata) next to availability status --- */
  const timeEl = document.getElementById('local-time');

  function updateTime() {
    if (!timeEl) return;
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }) + ' IST';
  }

  updateTime();
  let timeInterval = setInterval(updateTime, 30000);

  /* Respect reduced motion: stop the interval tick */
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) {
    clearInterval(timeInterval);
    /* Still show the initial time, just don't tick */
  }

  /* --- 2. SCROLL FADE-IN for .fade-entry elements --- */
  if (!motionQuery.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-entry').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Reduced motion or no IntersectionObserver: show everything */
    document.querySelectorAll('.fade-entry').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
