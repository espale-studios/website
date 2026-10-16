// Pop sections in with a little bounce as they scroll into view (styles in css/effects.css).
(function () {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const STAGGER_MS = 120;
    const targets = document.querySelectorAll('.section-title, .about > p, .game-trailer, .game-area > *');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => {
        // Leave anything already on screen alone so nothing visible blinks out on load
        if (el.getBoundingClientRect().top < window.innerHeight) {
            return;
        }

        // Side-by-side game media and text pop in one after the other
        if (el.parentElement.classList.contains('game-area')) {
            const index = Array.prototype.indexOf.call(el.parentElement.children, el);
            el.style.setProperty('--reveal-delay', (index * STAGGER_MS) + 'ms');
        }

        el.classList.add('reveal');
        observer.observe(el);
    });
})();
