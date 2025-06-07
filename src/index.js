// Wave 1
// HTML, partually CSS

// Wave 2
// Temperature Ranges, Landscape Changes

// Wave 3
// City Changes

// Wave 4
// Calling API
// Proxy Server: LocationIQ, Openweather there - checked, works!

// Wave 5
// Sky changes


"use strict";

// Global variables

let temperature = 14;

const increaseButton = document.getElementById('increaseTempControl');
const decreaseButton = document.getElementById('decreaseTempControl');
const cityNameInput = document.getElementById('cityNameInput');
const cityNameReset = document.getElementById('cityNameReset');
const headerCityName = document.getElementById('headerCityName');
const tempValue =  document.getElementById('tempValue');
const landscape = document.getElementById('landscape');
const skySelect = document.getElementById('skySelect');
const sky = document.getElementById('sky');
const currentTempButton = document.getElementById('currentTempButton');


// Helper Functions
const getTempColor = (temp) => {
  if (temp >= 27) return 'red';
  if (temp >= 21) return 'orange';
  if (temp >= 15) return 'yellow';
  if (temp >= 10) return 'green';
  return 'teal';
};

const getLandscape = (temp) => {
  if (temp >= 27) return "🌵🌵 🌵🌵 🌵🌵";
  if (temp >= 21) return "🌸🌼 🌸🌼 🌸🌼";
  if (temp >= 15) return "🌿🌿 🌿🌿 🌿🌿";
  if (temp >= 10) return "🌲🌲 🌲🌲 🌲🌲";
  return "❄️❄️ ❄️❄️ ❄️❄️";
};

const getSkyEmojis = (sky) => {
  if (sky === "Sunny") return "☀️☀️ ☀️☀️ ☀️☀️";
  if (sky === "Cloudy") return "☁️☁️ ☁️☁️ ☁️☁️";
  if (sky === "Rainy") return "💧💧 💧💧 💧💧";
  return "❄️❄️ ❄️❄️ ❄️❄️";
};


// Main Functions
const updateTemperature = () => {
  tempValue.textContent = `${temperature}°C`;
  tempValue.className = '';
  tempValue.classList.add(getTempColor(temperature));
  landscape.textContent = getLandscape(temperature);
};

const updateSky = () => {
  sky.textContent = getSkyEmojis(skySelect.value);
};

const resetCityName = () => {
  cityNameInput.value = "Seattle";
  headerCityName.textContent = "Seattle";
};


// Event Listeners
increaseButton.addEventListener('click', () => {
  temperature += 1;
  updateTemperature();
});

decreaseButton.addEventListener('click', () => {
  temperature -= 1;
  updateTemperature();
});

cityNameInput.addEventListener('input', () => {
  headerCityName.textContent = cityNameInput.value;
});

cityNameReset.addEventListener('click', () => {
  resetCityName();
  temperature = 14;
  skySelect.value = "Rainy";
  updateTemperature();
  updateSky();
});

skySelect.addEventListener('change', updateSky);

currentTempButton.addEventListener('click', () => {
  axios.get('http://127.0.0.1:5000/location', {
    params: { q: cityNameInput.value }
  })
    .then((response) => {
      const { lat, lon } = response.data[0];
      return axios.get('http://127.0.0.1:5000/weather', {
        params: { lat, lon }
      });
    })
    .then((response_weather) => {
      const kelvinTemperature = response_weather.data.main.temp;
      temperature = Math.round(kelvinTemperature - 273.15);
      updateTemperature();
    })
    .catch((error) => {
      console.log(error);
    });
});


// Initial Render
resetCityName();
skySelect.value = "Rainy";
updateTemperature();
updateSky();
