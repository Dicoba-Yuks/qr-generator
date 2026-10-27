const QRCode = require("qrcode");

const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");
const qrCanvas = document.getElementById("qrCanvas");
const downloadLink = document.getElementById("downloadLink");

generateBtn.addEventListener("click", () => {
  const textValue = urlInput.value.trim();

  if (!textValue) {
    alert("Silakan masukkan URL atau teks terlebih dahulu!");
    return;
  }

  // Membuat QR Code ke elemen HTML5 Canvas secara lokal
  QRCode.toCanvas(
    qrCanvas,
    textValue,
    { width: 220, margin: 2 },
    function (error) {
      if (error) {
        console.error(error);
        alert("Gagal menghasilkan QR Code.");
        return;
      }

      // Tampilkan kotak hasil QR
      qrContainer.style.display = "block";

      // Konversi canvas menjadi data URL untuk tombol download
      const imageURL = qrCanvas.toDataURL("image/png");
      downloadLink.href = imageURL;
    },
  );
});

// Shortcut tekan Enter pada keyboard
urlInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    generateBtn.click();
  }
});
