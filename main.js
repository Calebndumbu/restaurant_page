/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/contact.js":
      /*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.getElementById("content");\r\n  const contact = document.createElement("div");\r\n  contact.innerHTML = `\r\n      <h1>Contact Us</h1>\r\n      <p>Phone: (123) 456-7890</p>\r\n      <p>Email: contact@restaurant.com</p>\r\n    `;\r\n  content.appendChild(contact);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?'
        );

        /***/
      },

    /***/ "./src/home.js":
      /*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\r\n  const content = document.getElementById("content");\r\n  const home = document.createElement("div");\r\n  home.innerHTML = `\r\n  <h1>Welcome to Our Restaurant</h1>\r\n  <p>Experience the best cuisine in town</p>`;\r\n\r\n  content.appendChild(home);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById("content");\r\n  content.innerHTML = "";\r\n}\r\n\r\nfunction setUpNav() {\r\n  const homeBtn = document.getElementById("homeBtn");\r\n  const menuBtn = document.getElementById("menuBtn");\r\n  const contactBtn = document.getElementById("contactBtn");\r\n\r\n  homeBtn.addEventListener("click", () => {\r\n    clearContent();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\r\n  });\r\n\r\n  menuBtn.addEventListener("click", () => {\r\n    clearContent();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();\r\n  });\r\n\r\n  contactBtn.addEventListener("click", () => {\r\n    clearContent();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();\r\n  });\r\n}\r\n\r\nfunction init() {\r\n  setUpNav();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\r\n}\r\n\r\ndocument.addEventListener("DOMContentLoaded", init);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/menu.js":
      /*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.getElementById("content");\r\n  const menu = document.createElement("div");\r\n  menu.innerHTML = menu.innerHTML = `\r\n    <h1>Our Menu</h1>\r\n    <ul>\r\n      <li>Spaghetti - $12</li>\r\n      <li>Grilled Chicken - $15</li>\r\n      <li>Caesar Salad - $10</li>\r\n    </ul>\r\n  `;\r\n  content.appendChild(menu);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
