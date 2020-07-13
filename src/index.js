import Weather from './weather';
import Storage from './storage';
import Dom from './dom';

const storage = new Storage();

const dom = new Dom();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

const changeBtn = document.getElementById('w-change-btn');
const city = document.getElementById('city');

function getWeather() {
  weather.getWeather(city.value)
    .then(results => {
      dom.paint(results);
    })
    // eslint-disable-next-line no-alert
    .catch(err => alert(err));
}

document.addEventListener('DOMContentLoaded', getWeather);

changeBtn.addEventListener('click', () => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  storage.setLocationData(city);

  getWeather();

  document.getElementById('close').click();
});
