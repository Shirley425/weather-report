"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const displayedCityName = document.getElementById("displayed-city-name");
  const resetButton = document.getElementById("choose-place");

  cityInput.addEventListener("input", () => {
    displayedCityName.textContent = cityInput.value || "Seattle";
  });
});

// tried to write a dynamic header, didnt finish
// const header = document.getElementById("rotating-header");
// const languages = [
//   "Weather Report",
//   "天气预报",           // Chinese
//   "Informe del Clima", // Spanish
//   "Прогноз погоды",     // Russian
//   "मौसम की रिपोर्ट",     // Hindi
// ];

// let langIndex = 0;

// setInterval(() => {
// langIndex = (langIndex + 1) % languages.length;
// header.textContent = languages[langIndex];
// }, 3000); 


document.getElementById('setTempBtn').addEventListener('click', () => {
  const input = document.getElementById('tempInput');
  const temp = parseFloat(input.value);
  const display = document.getElementById('temperature-display');

  if (isNaN(temp)) {
    display.textContent = '--';
    display.className = 'temperature';
    return;
  }

  display.textContent = `${temp}°`;

  display.className = 'temperature';

  if (temp < 32) {
    display.classList.add('temp-cold');
  } else if (temp < 45) {
    display.classList.add('temp-cool');
  } else if (temp < 72) {
    display.classList.add('temp-mild');
  } else if (temp < 85) {
    display.classList.add('temp-warm');
  } else if (temp <= 100) {
    display.classList.add('temp-hot');
  } else {
    display.classList.add('temp-extreme');
  }
});
