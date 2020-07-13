class Weather {
  constructor(city, state) {
    this.API_KEY = '9682c3298e2dec0fe07fd5e39edab9ce';
    this.city = city;
    this.state = state;
  }

  // eslint-disable-next-line class-methods-use-this
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.API_KEY}`, { mode: 'cors' });

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}

export default Weather;