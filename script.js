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
