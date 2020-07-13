/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Dom {\r\n  constructor() {\r\n    this.location = document.getElementById('w-location');\r\n    this.desc = document.getElementById('w-desc');\r\n    this.string = document.getElementById('w-string');\r\n    this.details = document.getElementById('w-details');\r\n    this.icon = document.getElementById('w-icon');\r\n    this.humidity = document.getElementById('w-humidity');\r\n    this.feelsLike = document.getElementById('w-feels-like');\r\n    this.pressure = document.getElementById('w-pressure');\r\n    this.wind = document.getElementById('w-wind');\r\n  }\r\n\r\n  paint(weather) {\r\n    this.location.textContent = weather.name;\r\n    this.desc.textContent = weather.weather[0].description;\r\n    this.string.innerHTML = `${Math.floor(weather.main.temp)}<span>&#xb0;</span>C`;\r\n    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);\r\n    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;\r\n    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;\r\n    this.pressure.textContent = `Pressure: ${weather.main.pressure}pascal`;\r\n    this.wind.textContent = `Wind: ${weather.wind.speed}Km/h`;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dom);\r\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\nconst storage = new _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nconst dom = new _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nconst weatherLocation = storage.getLocationData();\r\n\r\nconst weather = new _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"](weatherLocation.city);\r\n\r\nconst changeBtn = document.getElementById('w-change-btn');\r\nconst city = document.getElementById('city');\r\n\r\nfunction getWeather() {\r\n  weather.getWeather(city.value)\r\n    .then(results => {\r\n      dom.paint(results);\r\n      console.log(results);\r\n    })\r\n    // eslint-disable-next-line no-alert\r\n    .catch(err => alert(err));\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', getWeather);\r\n\r\nchangeBtn.addEventListener('click', () => {\r\n  const city = document.getElementById('city').value;\r\n\r\n  weather.changeLocation(city);\r\n\r\n  storage.setLocationData(city);\r\n\r\n  getWeather();\r\n\r\n  document.getElementById('close').click();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Storage {\r\n  constructor(city) {\r\n    this.city = city;\r\n    this.defaultCity = 'London';\r\n  }\r\n\r\n  getLocationData() {\r\n    if (localStorage.getItem('city') === null) {\r\n      this.city = this.defaultCity;\r\n    } else {\r\n      this.city = localStorage.getItem('city');\r\n    }\r\n\r\n    return {\r\n      city: this.city,\r\n    };\r\n  }\r\n\r\n  // eslint-disable-next-line class-methods-use-this\r\n  setLocationData(city) {\r\n    localStorage.setItem('city', city);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Storage);\r\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Weather {\r\n  constructor(city) {\r\n    this.API_KEY = '9682c3298e2dec0fe07fd5e39edab9ce';\r\n    this.city = city;\r\n  }\r\n\r\n  // eslint-disable-next-line class-methods-use-this\r\n  async getWeather() {\r\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.API_KEY}`, { mode: 'cors' });\r\n\r\n    const responseData = await response.json();\r\n\r\n    return responseData;\r\n  }\r\n\r\n  // Change weather location\r\n  changeLocation(city) {\r\n    this.city = city;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });