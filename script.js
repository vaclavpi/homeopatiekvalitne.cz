// Funkce pro načítání externích HTML souborů
function loadHTML(id, filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Chyba při načítání souboru:', error));
}

// Načtení navigace a footeru po načtení stránky
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header-placeholder", "header.html");
    loadHTML("footer-placeholder", "footer.html");
});



// Při kliknutí na hamburger menu, přepneme třídu "active" na navbar
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
