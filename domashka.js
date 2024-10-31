document.addEventListener("DOMContentLoaded", () => {
  const showQrButton = document.getElementById("showQr");
  const getVerseButton = document.getElementById("getVerse");
  const verseContainer = document.getElementById("verseContainer");
  const qrImage = document.getElementById("qrImage");
  const backButton = document.getElementById("backButton");

  // Відкриття QR-коду
  showQrButton.addEventListener("click", () => {
    qrImage.style.display = "block";
    toggleButtons(false);
  });

  // Показ випадкового вірша
  getVerseButton.addEventListener("click", () => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    verseContainer.innerHTML = `<p>${randomVerse.text}</p><p><em>${randomVerse.reference}</em></p>`;
    qrImage.style.display = "none"; // Сховати QR-код, якщо був відкритий
    toggleButtons(false);
  });

  // Кнопка "Назад" для повернення на початковий екран
  backButton.addEventListener("click", () => {
    verseContainer.innerHTML = "";
    qrImage.style.display = "none"; // Сховати QR-код при поверненні
    toggleButtons(true);
  });

  // Функція для показу/приховання кнопок
  function toggleButtons(showMain) {
    showQrButton.style.display = showMain ? "inline-block" : "none";
    getVerseButton.style.display = showMain ? "inline-block" : "none";
    backButton.style.display = showMain ? "none" : "inline-block";
  }
});
