// Force autoplay for muted videos on Chrome iOS, which ignores the autoplay attribute/parameter unlike Safari.

// HTML5 videos (game clips and the hero background) — play immediately and re-play whenever they scroll into view.
const gameVideos = document.querySelectorAll('.games-image video, .home-video-bg video');

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
        }
    });
}, { threshold: 0.1 });

gameVideos.forEach(v => {
    v.play().catch(() => {});
    videoObserver.observe(v);
});

// Browsers pause muted videos while the tab is hidden, resume them when it is shown again.
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) gameVideos.forEach(v => v.play().catch(() => {}));
});
