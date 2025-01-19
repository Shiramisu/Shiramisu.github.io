function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.header, .glowing-card, footer').forEach(element => {
        element.classList.toggle('dark-mode');
    });
}
