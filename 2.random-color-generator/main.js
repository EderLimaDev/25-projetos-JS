const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyColor = document.querySelector(".hex-copy-color");

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
});

hexCopyColor.addEventListener("click", getHexColorCopyToClipboard);

function getHexColorCopyToClipboard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Color Copied to Clipboard");
}

// RGB Color Generator

const rgbBtn = document.getElementById("rgb-btn");
const getRedInputRange = document.getElementById("red");
const getGreenInputRange = document.getElementById("green");
const getBlueInputRange = document.getElementById("blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyColor = document.querySelector(".rgb-copy-color");
const rgbColorValue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});

rgbCopyColor.addEventListener("click", getRgbColorCopyToClipboard);

function getRgbColorCopyToClipboard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("Color Copied to Clipboard");
}
