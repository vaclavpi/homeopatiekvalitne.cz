// Funkce pro načítání externích HTML souborů
function loadHTML(id, filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Chyba při načítání souboru:', error));
}

// Načtení navigace a footeru po načtení stránky
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("navbar-placeholder", "navbar.html");
    loadHTML("footer-placeholder", "footer.html");
});



// Při kliknutí na hamburger menu, přepneme třídu "active" na navbar
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".topnav .menu");
    const hamburger = document.querySelector(".hamburger-menu");
  
    // Kliknutí na hamburger menu pro zobrazení menu
    hamburger.addEventListener("click", function () {
      document.getElementById("myTopnav").classList.toggle("responsive");  // Přepnutí třídy pro zobrazení/skrytí menu
    });
  });
  