const QRCode = require("qrcode");

const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");
const qrCanvas = document.getElementById("qrCanvas");
const downloadLink = document.getElementById("downloadLink");

generateBtn.addEventListener("click", () => {
  const textValue = urlInput.value.trim();

  if (!textValue) {
    alert("Please enter a URL or text first!");
    return;
  }

  QRCode.toCanvas(
    qrCanvas,
    textValue,
    { width: 220, margin: 2 },
    function (error) {
      if (error) {
        console.error(error);
        alert("Failed to generate QR Code.");
        return;
      }

      qrContainer.style.display = "block";

      const imageURL = qrCanvas.toDataURL("image/png");
      downloadLink.href = imageURL;
    },
  );
});

urlInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    generateBtn.click();
  }
});
