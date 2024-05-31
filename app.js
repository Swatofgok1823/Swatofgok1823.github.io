document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const menu = document.getElementById('mobile-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
