(function () {
  var HASLO = "Statystyka2025/26"; // ← zmień tu

  // Po załadowaniu DOM pytamy o hasło
  document.addEventListener("DOMContentLoaded", function () {
    var ok = false;
    // Jedna próba (możesz dodać pętlę, jeśli chcesz więcej)
    var p = prompt("Podaj hasło, aby uzyskać dostęp:");
    if (p === HASLO) ok = true;

    if (!ok) {
      // Twarde zastąpienie całej strony komunikatem
      document.documentElement.innerHTML =
        "<head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Brak dostępu</title></head>" +
        "<body style='font-family:system-ui;max-width:60ch;margin:4rem auto;padding:0 1rem;line-height:1.5'>" +
        "<h1>Brak dostępu</h1><p>Nieprawidłowe hasło.</p></body>";
    } else {
      // Odsłoń treść po poprawnym haśle
      document.body.style.display = "block";
    }
  });
})();
