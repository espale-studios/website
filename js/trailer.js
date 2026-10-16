// The trailer starts as a thumbnail link; swap in the YouTube player only when it's clicked,
// so the player's scripts don't load with the page. Without JS the link opens the video on YouTube.
document.querySelectorAll('.trailer-facade').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const iframe = document.createElement('iframe');
        iframe.className = 'game-trailer';
        iframe.src = 'https://www.youtube.com/embed/' + link.dataset.youtubeId + '?autoplay=1';
        iframe.title = link.getAttribute('aria-label');
        iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        iframe.allowFullscreen = true;
        link.replaceWith(iframe);
    });
});
