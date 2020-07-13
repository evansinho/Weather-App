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
eval("__webpack_require__.r(__webpack_exports__);\nclass Dom {\n  constructor() {\n    this.location = document.getElementById('w-location');\n    this.desc = document.getElementById('w-desc');\n    this.string = document.getElementById('w-string');\n    this.details = document.getElementById('w-details');\n    this.icon = document.getElementById('w-icon');\n    this.humidity = document.getElementById('w-humidity');\n    this.feelsLike = document.getElementById('w-feels-like');\n    this.pressure = document.getElementById('w-pressure');\n    this.wind = document.getElementById('w-wind');\n  }\n\n  paint(weather) {\n    this.location.textContent = weather.name;\n    this.desc.textContent = weather.weather[0].description;\n    this.string.innerHTML = `${Math.floor(weather.main.temp)}<span>&#xb0;</span>C`;\n    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);\n    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;\n    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;\n    this.pressure.textContent = `Pressure: ${weather.main.pressure}pascal`;\n    this.wind.textContent = `Wind: ${weather.wind.speed}Km/h`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dom);\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\nconst storage = new _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst dom = new _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nconst weatherLocation = storage.getLocationData();\n\nconst weather = new _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"](weatherLocation.city);\n\nconst changeBtn = document.getElementById('w-change-btn');\nconst city = document.getElementById('city');\n\nfunction getWeather() {\n  weather.getWeather(city.value)\n    .then(results => {\n      dom.paint(results);\n      console.log(results);\n    })\n    .catch(err => console.log(err));\n}\n\ndocument.addEventListener('DOMContentLoaded', getWeather);\n\nchangeBtn.addEventListener('click', () => {\n  const city = document.getElementById('city').value;\n\n  weather.changeLocation(city);\n\n  storage.setLocationData(city);\n\n  getWeather();\n\n  document.getElementById('close').click();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Storage {\n  constructor(city) {\n    this.city = city;\n    this.defaultCity = 'Lagos';\n  }\n\n  getLocationData() {\n    if (localStorage.getItem('city') === null) {\n      this.city = this.defaultCity;\n    } else {\n      this.city = localStorage.getItem('city');\n    }\n\n    return {\n      city: this.city,\n    };\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  setLocationData(city) {\n    localStorage.setItem('city', city);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Storage);\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Weather {\n  constructor(city, state) {\n    this.API_KEY = '9682c3298e2dec0fe07fd5e39edab9ce';\n    this.city = city;\n    this.state = state;\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  async getWeather() {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.API_KEY}`, { mode: 'cors' });\n\n    const responseData = await response.json();\n\n    return responseData;\n  }\n\n  // Change weather location\n  changeLocation(city) {\n    this.city = city;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });