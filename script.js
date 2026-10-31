// Remplace par ton adresse Outlook
const EMAIL = "lukaditshitengefreddy01@outlook.com";

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const url =
    "https://outlook.office.com/mail/deeplink/compose" +
    "?to=" + encodeURIComponent(EMAIL) +
    "&subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(message + "\n\n" + name);

  window.open(url, "_blank", "noopener");
});

const toTop = document.getElementById("to-top");

// Affiche le bouton après 400 px de défilement
window.addEventListener("scroll", () => {
  toTop.classList.toggle("show", window.scrollY > 400);
});

// Remonte en douceur (grâce au scroll-behavior de html)
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

function setMenu(open) {
  burger.classList.toggle("open", open);
  menu.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}

burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
overlay.addEventListener("click", () => setMenu(false));

// Ferme la sidebar quand on clique sur un lien
menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => setMenu(false))
);

// Ferme avec la touche Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Referme si l'écran redevient large
window.matchMedia("(min-width: 701px)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});