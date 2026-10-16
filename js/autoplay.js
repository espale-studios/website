// Start muted videos from script instead of the autoplay attribute: the hero waits until the page has loaded and
// the detail clips until they're about to scroll into view, so they don't compete with the first paint.
// Playing from script also covers Chrome iOS, which ignores the autoplay attribute unlike Safari.

const heroVideo = document.querySelector('.home-video-bg video');
const clipVideos = document.querySelectorAll('.games-image video');
const onScreen = new Set();

const play = (v) => v.play().catch(() => {});

// Play videos near the screen and pause them once they scroll away
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            onScreen.add(entry.target);
            play(entry.target);
        } else {
            onScreen.delete(entry.target);
            entry.target.pause();
        }
    });
}, { rootMargin: '200px 0px' });

clipVideos.forEach(v => videoObserver.observe(v));

if (heroVideo) {
    const startHero = () => {
        heroVideo.preload = 'auto';
        videoObserver.observe(heroVideo);
    };

    if (document.readyState === 'complete') {
        startHero();
    } else {
        window.addEventListener('load', startHero);
    }
}

// Browsers pause muted videos while the tab is hidden, resume the visible ones when it is shown again.
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) onScreen.forEach(play);
});
