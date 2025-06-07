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

increaseButton.addEventListener ('click', () => {
    temperature += 1;
    updateTemprature();
});
decreaseButton.addEventListener('click', () => {
    temperature -= 1;
    updateTemperature();
});


// Wave 3
// City Changes
cityNameInput.addEventListener ('input', () =>{
    headerCityName.textContent = cityNameInput.value;
});
cityNameReset.addEventListener ('click', () => { 
    cityNameInput.value = "Seattle";
    headerCityName.textContent = cityNameInput.value;
});


// Wave 4
// Calling API
// Proxy Server: LocationIQ, Openweather there - checked, works!
currentTempButton.addEventListener('click', () => {
    axios.get('http://127.0.0.1:5000/location',{
        params: {q: cityNameInput.value}
    })
    .then ((response) => {
        const {lat, lon} = response.data[0];
        return axios.get('http://127.0.0.1:5000/weather',{
            params: {lat, lon}
        });
    })
    .then ((response_weather) => {
        // console.log(response_weather);
        const kelvinTemperature = response_weather.data.main.temp;
        // Celsius = Kelvin - 273.15
        temperature = Math.round(kelvinTemperature - 273.15);
        updateTemprature();
    })
    .catch((error) => {
        console.log(error);
    })
});




