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


const state = {
  tempValue: 65,
};

const updateTempValue = () => {
  const tempValue = document.getElementById('tempValue');
  const temp = state.tempValue;
  tempValue.textContent = temp;
  tempValue.className = '';

  if (temp < 32) {
    tempValue.classList.add('temp-cold');
  } else if (temp < 45) {
    tempValue.classList.add('temp-cool');
  } else if (temp < 72) {
    tempValue.classList.add('temp-mild');
  } else if (temp < 85) {
    tempValue.classList.add('temp-warm');
  } else if (temp <= 100) {
    tempValue.classList.add('temp-hot');
  } else {
    tempValue.classList.add('temp-extreme');
  }
};

const increseTemp = (event) => {
  state.tempValue +=1;
  updateTempValue();
};

const decreseTemp = (event) => {
  state.tempValue -=1;
  updateTempValue();
};

const registerEventHandlers = (event) => {
  const increseButton = document.querySelector('#increaseTempControl')
  increseButton.addEventListener('click', increseTemp)

  const decreseButton = document.querySelector('#decreaseTempControl')
  decreseButton.addEventListener('click', decreseTemp)

};

document.addEventListener('DOMContentLoaded', () => {
  registerEventHandlers();
  updateTempValue();
});

const axios = require('axios');

axios
  .get('https://us1.locationiq.com/v1/search.php')
  .then((response) => {
    console.log('The value of response is:', response);
  })
  .catch((error) => {
    console.log('The value of error is:', error);
  });

// axios
//   .get('https://api.openweathermap.org/data/2.5/weather')
//   .then(() => {
//     console.log('success!');
//   })
//   .catch(() => {
//     console.log('error!');
//   });