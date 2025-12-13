(function () {
  function addReveal(el) {
    if (!el || el.classList.contains('reveal')) return;
    el.classList.add('reveal');
  }

  function setupReveal() {
    var selectors = [
      'section',
      '.column1',
      '.feature-2',
      '.feature-3',
      '.timeline-box',
      '.certificate-card',
      '#SkillBox',
      '.SkillBar',
      '.portfolio-item',
      '.carousel-item',
      '.project-heading',
      '.context'
    ];

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(addReveal);
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  }

  function ensureBg() {
    var existing = document.querySelector('.bg-effects');
    if (existing) return;
    var bg = document.createElement('div');
    bg.className = 'bg-effects';
    document.body.insertBefore(bg, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      ensureBg();
      setupReveal();
    });
  } else {
    ensureBg();
    setupReveal();
  }
})();
