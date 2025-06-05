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
