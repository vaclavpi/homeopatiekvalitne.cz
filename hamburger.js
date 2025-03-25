
// Zajistíme, aby se tento kód spustil až po načtení celé stránky a headeru
window.addEventListener('load', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navbar = document.querySelector('.navbar');
    
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            navbar.classList.toggle('active'); // Přepnutí třídy active pro zobrazení/skrytí menu
        });
    }
});
