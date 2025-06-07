"use strict";

let temperature = 20;

const increaseButton = document.getElementById('increaseTempControl');
const decreaseButton = document.getElementById('decreaseTempControl');
const cityNameInput = document.getElementById('cityNameInput');
const displayedCityName = document.getElementById('displayedCityName');

// Wave 1
// HTML, partually CSS


// Wave 2
// Temperature Ranges, Landscape Changes
const updateTemperature = () => {
  tempValue.textContent = `${temperature}°C`;
  updateColorTemp(temperature);
  updateWeatherGarden(temperature);
};

const updateColorTemp = (temperature) => {

    tempValue.className = '';

  if (temperature >= 27) {
    tempValue.classList.add('red');
  } else if (temperature >= 21) {
    tempValue.classList.add('orange');
  } else if (temperature >= 15) {
    tempValue.classList.add('yellow');
  } else if (temperature >= 10) {
    tempValue.classList.add('green');
  } else {
    tempValue.classList.add('teal');
  }
};

// Wave 3
// City Changes


// Wave 4
// Calling API, LocationIQ, Openweather
// Proxy Server


increaseButton.addEventListener ('click', () => {
    temperature += 1;
    updateTemprature();
});
decreaseButton.addEventListener('click', () => {
    temperature -= 1;
    updateTemprature();
});