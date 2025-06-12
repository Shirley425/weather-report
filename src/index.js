"use strict";

const state = {
  tempValue: 65,
};

const updateTempValue = () => {
  const tempValue = document.getElementById('tempValue');
  const img = document.getElementById('landscape');
  const temp = state.tempValue;

  tempValue.textContent = temp;
  tempValue.className = '';

  if (temp < 32) {
    tempValue.classList.add('temp-cold');
    img.src = 'assets/below32.jpg';
  } else if (temp < 45) {
    tempValue.classList.add('temp-cool');
    img.src = 'assets/32-45.jpg';
  } else if (temp < 72) {
    tempValue.classList.add('temp-mild');
    img.src = 'assets/45-72.jpg';
  } else if (temp < 85) {
    tempValue.classList.add('temp-warm');
    img.src = 'assets/72-85.jpg';
  } else if (temp <= 100) {
    tempValue.classList.add('temp-hot');
    img.src = 'assets/85-100.jpg';
  } else {
    tempValue.classList.add('temp-extreme');
    img.src = 'assets/above100.jpg';
  }
};

const increaseTemp = () => {
  state.tempValue += 1;
  updateTempValue();
};

const decreaseTemp = () => {
  state.tempValue -= 1;
  updateTempValue();
};

const updateWeatherBackground = () => {
  const skySelect = document.getElementById('skySelect');
  const weather = skySelect.value;

  const skyClassMap = {
    Sunny: 'sky-sunny',
    Cloudy: 'sky-cloudy',
    Rainy: 'sky-rainy',
    Snowy: 'sky-snowy',
    Windy: 'sky-windy',
    Foggy: 'sky-foggy'
  };

  const newClass = skyClassMap[weather];
  const allBoxes = document.querySelectorAll('.box');

  allBoxes.forEach((box) => {
    box.classList.remove(
      'sky-sunny',
      'sky-cloudy',
      'sky-rainy',
      'sky-snowy',
      'sky-windy',
      'sky-foggy'
    );
    box.classList.add(newClass);
  });
};

const updateWeatherEmoji = () => {
  const skySelect = document.getElementById('skySelect');
  const weatherEmoji = document.getElementById('weatherEmoji');
  const weather = skySelect.value;

  const emojiMap = {
    Sunny: '☀️🌈☀️☀️🌈☀️☀️🌈☀️☀️🌈☀️☀️',
    Cloudy: '☁️⛅☁️☁️⛅☁️☁️⛅☁️☁️⛅☁️☁️',
    Rainy: '🌧️🌦️🌧️🌧️🌦️🌧️🌧️🌦️🌧️🌧️🌦️🌧️🌧️',
    Snowy: '❄️🌨️❄️❄️🌨️❄️❄️🌨️❄️❄️🌨️❄️❄️',
    Windy: '🌬️🍃🌬️🌬️🍃🌬️🌬️🍃🌬️🌬️🍃🌬️🌬️',
    Foggy: '🌫️🌁🌫️🌫️🌁🌫️🌫️🌁🌫️🌫️🌁🌫️🌫️'
  };

  weatherEmoji.textContent = emojiMap[weather];
};

const updateCityName = () => {
  const input = document.getElementById('city-input');
  const display = document.getElementById('displayed-city-name');
  display.textContent = input.value || "Seattle";
};

const resetCityName = () => {
  const input = document.getElementById('city-input');
  input.value = "Seattle";
  updateCityName();
};

const registerEventHandlers = () => {
  document.getElementById('increaseTempControl').addEventListener('click', increaseTemp);
  document.getElementById('decreaseTempControl').addEventListener('click', decreaseTemp);
  document.getElementById('skySelect').addEventListener('change', () => {
    updateWeatherBackground();
    updateWeatherEmoji();
  });
  document.getElementById("city-input").addEventListener('input', updateCityName);
  document.getElementById("choose-place").addEventListener('click', resetCityName);

  document.getElementById('temp-now-btn').addEventListener('click', () => {
    const cityNameInput = document.getElementById('city-input');
    const city = cityNameInput.value || 'Seattle';

    axios.get('http://127.0.0.1:5000/location', {
      params: { q: city }
    })
      .then((response) => {
        const { lat, lon } = response.data[0];
        return axios.get('http://127.0.0.1:5000/weather', {
          params: { lat, lon }
        });
      })
      .then((response_weather) => {
        const kelvinTemperature = response_weather.data.main.temp;
        state.tempValue = Math.round((kelvinTemperature - 273.15) * 9/5 + 32);
        updateTempValue();
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  });
};

const onLoaded = () => {
registerEventHandlers();
  updateTempValue();
  updateWeatherBackground();
  updateWeatherEmoji();
  updateCityName();
};

document.addEventListener('DOMContentLoaded', onLoaded);
