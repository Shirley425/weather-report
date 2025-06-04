"use strict";

document.addEventListener("DOMContentLoaded", () => {
const cityInput = document.getElementById("city-input");
const displayedCityName = document.getElementById("displayed-city-name");
const resetButton = document.getElementById("choose-place");

cityInput.addEventListener("input", () => {
  displayedCityName.textContent = cityInput.value || "Seattle";
});

resetButton.addEventListener("click", () => {
  cityInput.value = "";
  displayedCityName.textContent = "Seattle";
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
