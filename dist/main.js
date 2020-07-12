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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n// Init storage\nconst storage = new _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n// Get stored location data\nconst weatherLocation = storage.getLocationData();\n// init weather\nconst weather = new _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"](weatherLocation.city);\n\nconst changeBtn = document.getElementById('w-change-btn');\nconst city = document.getElementById('city');\n\nfunction getWeather() {\n  weather.getWeather(city.value)\n    .then(results => {\n      // ui.paint(results);\n      console.log(results);\n    })\n    .catch(err => console.log(err));\n}\n\ndocument.addEventListener('DOMContentLoaded', getWeather);\n// change weather location\nchangeBtn.addEventListener('click', () => {\n  const city = document.getElementById('city').value;\n  // Change location\n  weather.changeLocation(city);\n  // Set location in LS\n  storage.setLocationData(city);\n  // Get and display weather\n  getWeather();\n  // close modal\n  document.getElementById('close').click();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n// const API_KEY = '9682c3298e2dec0fe07fd5e39edab9ce';\n// const BASE_URL = 'https://api.openweathermap.org/data/2.5/';\n\n// const weatherController = (() => {\n//   const getWeather = async (location) => {\n//     try {\n//       const response = await fetch(`${BASE_URL}weather?q=${location}&APPID=${API_KEY}`, { mode: 'cors' });\n\n//       if (response.status === 200) {\n//         return response.json();\n//       }\n//       return 'City not found';\n//     } catch (error) {\n//       return error.message;\n//     }\n//   };\n\n//   return { getWeather };\n// })();\n\n// export default weatherController;\n\nclass Weather {\n  constructor(city, state) {\n    this.API_KEY = '9682c3298e2dec0fe07fd5e39edab9ce';\n    this.city = city;\n    this.state = state;\n  }\n\n  // Fetch weather from API\n  // eslint-disable-next-line class-methods-use-this\n  async getWeather() {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.API_KEY}`, { mode: 'cors' });\n\n    const responseData = await response.json();\n\n    return responseData;\n  }\n\n  // Change weather location\n  changeLocation(city) {\n    this.city = city;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });