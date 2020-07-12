import Weather from './weather';
import Storage from './storage';

// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// init weather
const weather = new Weather(weatherLocation.city);

const changeBtn = document.getElementById('w-change-btn');
const city = document.getElementById('city');

function getWeather() {
  weather.getWeather(city.value)
    .then(results => {
      // ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeather);
// change weather location
changeBtn.addEventListener('click', () => {
  const city = document.getElementById('city').value;
  // Change location
  weather.changeLocation(city);
  // Set location in LS
  storage.setLocationData(city);
  // Get and display weather
  getWeather();
  // close modal
  document.getElementById('close').click();
});
