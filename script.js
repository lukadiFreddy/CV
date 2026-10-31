// Remplace par ton adresse Outlook
const EMAIL = "votre.email@outlook.com";

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