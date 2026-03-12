document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('copyright-year');
    if (el) el.textContent = new Date().getFullYear();
});
