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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/accordeon.js":
/*!************************************!*\
  !*** ./src/assets/js/accordeon.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let accordeonItems = document.querySelectorAll('.faq__item');\r\n\r\naccordeonItems.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n        let itemText = item.querySelector('.faq__answer');\r\n        let btnFaq = item.querySelector('.btn--faq');\r\n\r\n        itemText.classList.toggle('show-faq');\r\n\r\n        if (btnFaq.innerHTML == '+') {\r\n            btnFaq.innerHTML = '-';\r\n            btnFaq.classList.add('opened');\r\n        } else {\r\n            btnFaq.innerHTML = '+';\r\n            btnFaq.classList.remove('opened')\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/accordeon.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById(\"burger\");\r\nconst nav = document.getElementById('nav');\r\nconst body = document.body;\r\nconst page = document.getElementById('page');\r\n\r\nburger.addEventListener('click', () => {\r\n    nav.classList.add('show-nav');\r\n    burger.classList.add('closed-burger');\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/counter.js":
/*!**********************************!*\
  !*** ./src/assets/js/counter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("try {\r\n    const buttonCountPlus = document.getElementById(\"buttonCountPlus\");\r\n    const buttonCountMinus = document.getElementById(\"buttonCountMinus\");\r\n    const count = document.getElementById(\"buttonCountNumber\");\r\n    let number = 1;\r\n\r\n    console.log('opened');\r\n    buttonCountPlus.addEventListener('click', () => {\r\n        if(number < 9) {\r\n            number++;\r\n            count.innerHTML = number;\r\n        }\r\n    });\r\n\r\n    buttonCountMinus.addEventListener('click', () => {\r\n        if(number > 1) {\r\n            number--;\r\n            count.innerHTML = number;\r\n        }\r\n    });\r\n} catch(err) {\r\n    console.log('works');\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/counter.js?");

/***/ }),

/***/ "./src/assets/js/jumps.js":
/*!********************************!*\
  !*** ./src/assets/js/jumps.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const headerLogo = document.getElementById('headerLogo');\r\nconst ingestiblesItems = document.querySelectorAll('.ingestibles__item');\r\nconst itemBtn = document.getElementById('item-order');\r\n\r\n// Header logo\r\n\r\nheaderLogo.addEventListener('click', () => {\r\n    window.location=\"index.html\";\r\n});\r\n\r\n// Ingestibles Items\r\n\r\ningestiblesItems.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n        window.location=\"products-cbd-item.html\";\r\n    });\r\n});\r\n\r\n// Item Button\r\n\r\n// itemBtn.addEventListener('click', () => {\r\n//     window.location=\"products-cbd-item.html\";\r\n// });\r\n\n\n//# sourceURL=webpack:///./src/assets/js/jumps.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modal = document.getElementById('modal');\r\nconst modalBtn = document.getElementById('modal-btn');\r\nconst modalClose = document.getElementById('modal-close');\r\nconst modalContent = document.getElementById('modal-content');\r\n\r\nmodalBtn.addEventListener('click', () => {\r\n    modal.classList.add('show');\r\n    document.body.classList.add('no-scroll');\r\n});\r\n\r\nmodalClose.addEventListener('click', () => {\r\n    modal.classList.remove('show');\r\n    document.body.classList.remove('no-scroll');\r\n});\r\n\r\nmodal.addEventListener('click', () => {\r\n    modal.classList.remove('show');\r\n    document.body.classList.remove('no-scroll');\r\n});\r\n\r\nmodalContent.addEventListener('click', event => {\r\n    event.stopPropagation();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/accordeon.js ./src/assets/js/burger.js ./src/assets/js/counter.js ./src/assets/js/jumps.js ./src/assets/js/modal.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\htmlcssprojects\\white-label\\src\\assets\\js\\accordeon.js */\"./src/assets/js/accordeon.js\");\n__webpack_require__(/*! C:\\htmlcssprojects\\white-label\\src\\assets\\js\\burger.js */\"./src/assets/js/burger.js\");\n__webpack_require__(/*! C:\\htmlcssprojects\\white-label\\src\\assets\\js\\counter.js */\"./src/assets/js/counter.js\");\n__webpack_require__(/*! C:\\htmlcssprojects\\white-label\\src\\assets\\js\\jumps.js */\"./src/assets/js/jumps.js\");\nmodule.exports = __webpack_require__(/*! C:\\htmlcssprojects\\white-label\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/accordeon.js_./src/assets/js/burger.js_./src/assets/js/counter.js_./src/assets/js/jumps.js_./src/assets/js/modal.js?");

/***/ })

/******/ });