(function () {
    const MOBILE_BREAKPOINT = 900;
    const SCROLL_HIDE_THRESHOLD = 5;
    const header = document.querySelector('header');

    if (!header) {
        return;
    }

    const toggleButton = header.querySelector('.nav-toggle');
    const nav = header.querySelector('nav');

    if (!toggleButton || !nav) {
        return;
    }

    const setExpanded = function (expanded) {
        header.classList.toggle('nav-open', expanded);
        toggleButton.setAttribute('aria-expanded', String(expanded));
    };

    toggleButton.addEventListener('click', function () {
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
        setExpanded(!expanded);
    });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            setExpanded(false);
        });
    });

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        if (window.innerWidth > MOBILE_BREAKPOINT) {
            lastScrollY = window.scrollY;
            return;
        }

        const currentScrollY = window.scrollY;

        if (currentScrollY - lastScrollY > SCROLL_HIDE_THRESHOLD) {
            setExpanded(false);
        }

        lastScrollY = currentScrollY;
    }, { passive: true });

    window.addEventListener('resize', function () {
        if (window.innerWidth > MOBILE_BREAKPOINT) {
            setExpanded(false);
        }
    });
})();
