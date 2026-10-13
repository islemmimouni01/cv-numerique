// Menu mobile : ouvre et ferme la navigation quand on clique sur le bouton "Menu"
var bouton = document.getElementById("menu-toggle");
var menu = document.getElementById("main-nav");

bouton.addEventListener("click", function () {
  var ouvert = menu.classList.toggle("open");
  bouton.setAttribute("aria-expanded", ouvert);
});

// Referme le menu après un clic sur un lien
menu.addEventListener("click", function () {
  menu.classList.remove("open");
  bouton.setAttribute("aria-expanded", false);
});