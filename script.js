// Hamburger-Icon und Navigation auswählen
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

// Event-Listener für das Hamburger-Icon
burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle-Klasse 'active' für das Menü
});
