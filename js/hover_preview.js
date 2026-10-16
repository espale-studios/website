// Load the home page's hover trailer previews only on mouse devices (touch screens never show them),
// and only once the Games section is near, so the YouTube players stay off the initial page load.
(function () {
    const previews = document.querySelectorAll('.games-image-hover-video[data-src]');
    if (!previews.length || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '300px 0px' });

    previews.forEach(iframe => observer.observe(iframe));
})();
