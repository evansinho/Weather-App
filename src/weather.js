// const API_KEY = '9682c3298e2dec0fe07fd5e39edab9ce';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// const weatherController = (() => {
//   const getWeather = async (location) => {
//     try {
//       const response = await fetch(`${BASE_URL}weather?q=${location}&APPID=${API_KEY}`, { mode: 'cors' });

//       if (response.status === 200) {
//         return response.json();
//       }
//       return 'City not found';
//     } catch (error) {
//       return error.message;
//     }
//   };

//   return { getWeather };
// })();

// export default weatherController;

class Weather {
  constructor(city, state) {
    this.API_KEY = '9682c3298e2dec0fe07fd5e39edab9ce';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
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