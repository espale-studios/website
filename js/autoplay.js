// Force autoplay for muted videos on Chrome iOS, which ignores the autoplay attribute/parameter unlike Safari.

// 1. HTML5 videos — play immediately and re-play whenever they scroll into view.
const gameVideos = document.querySelectorAll('.games-image video');

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

// 2. YouTube background iframe — use the IFrame Player API to call playVideo() which works on Chrome iOS where the autoplay URL param is ignored.
window.onYouTubeIframeAPIReady = function () {
    const iframe = document.querySelector('.home-video-bg iframe');
    if (!iframe) return;
    if (!iframe.id) iframe.id = 'yt-bg-player';

    new YT.Player(iframe.id, {
        events: {
            onReady(e) {
                e.target.mute();
                e.target.playVideo();
            }
        }
    });
};

const ytScript = document.createElement('script');
ytScript.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(ytScript);
