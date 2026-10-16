// On touch screens, lift game media briefly when tapped and then let it settle back (styles in css/effects.css).
(function () {
    const LIFT_MS = 700;

    document.querySelectorAll('.games .games-image').forEach(el => {
        let timer = null;

        el.addEventListener('pointerdown', (e) => {
            if (e.pointerType === 'mouse') return;
            el.classList.add('tapped');
            clearTimeout(timer);
            timer = setTimeout(() => el.classList.remove('tapped'), LIFT_MS);
        });
    });
})();
