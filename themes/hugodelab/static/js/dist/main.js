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
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/hugodelab/static/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./themes/hugodelab/static/js/codelab.ts":
/*!***********************************************!*\
  !*** ./themes/hugodelab/static/js/codelab.ts ***!
  \***********************************************/
/*! exports provided: codelab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codelab\", function() { return codelab; });\nfunction codelab() {\n    document.addEventListener('DOMContentLoaded', function () {\n        // const urlHash = location.hash.slice(1);\n        // const h1List = document.getElementsByTagName('h1');\n        // for(let i = 0; i <= h1List.length - 1; i++) {\n        //   h1List[i].classList.add('codelab-step');\n        //   h1List[i].setAttribute(\"id\", String(i));\n        //   h1List[i].removeAttribute(\"selected\");\n        //   if(!urlHash){\n        //     h1List[0].setAttribute(\"selected\", \"\");\n        //   }\n        //   if(urlHash === String(i)) {\n        //     h1List[i].setAttribute(\"selected\", \"\");\n        //   }\n        // }\n        var urlHash = location.hash.slice(1);\n        var h1List = document.getElementsByTagName('h1');\n        // const allElements = document.getElementsByTagName('*');\n        var colabElms = document.getElementById(\"codelab-content\").children;\n        // for(let i = 0; i <= h1List.length - 1; i++) {\n        //   let tnode = document.createTextNode(\"<codelab-step></codelab-step>\");\n        //   h1List[i].parentNode.insertBefore(tnode, h1List[i]);\n        // }\n        // console.log('allElements', colabElms);\n        for (var i = 0; i <= colabElms.length - 1; i++) {\n            if (colabElms[i]['tagName'] === \"H1\") {\n                // let codelabElm = document.createElement('div');\n                // codelabElm.classList.add('codelab-step');\n                // codelabElm.appendChild(colabElms[i]);\n                // colabElms[i].parentNode.insertBefore(codelabElm, colabElms[i]);\n            }\n        }\n        //   for(let i = 0; i <= list.length - 1; i++) {\n        //     let pre = list[i].firstElementChild;\n        //     let code = list[i].firstElementChild.firstElementChild;\n        //     let codeName =  code ? code.className.split(\":\")[1] : null;\n        //     if(codeName) {\n        //       let div = document.createElement('div');\n        //       div.textContent = codeName;\n        //       div.classList.add('code-name');\n        //       pre.parentNode.insertBefore(div, pre);\n        //     }\n        //   }\n    });\n}\n\n\n//# sourceURL=webpack:///./themes/hugodelab/static/js/codelab.ts?");

/***/ }),

/***/ "./themes/hugodelab/static/js/index.ts":
/*!*********************************************!*\
  !*** ./themes/hugodelab/static/js/index.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _codelab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codelab */ \"./themes/hugodelab/static/js/codelab.ts\");\n\nObject(_codelab__WEBPACK_IMPORTED_MODULE_0__[\"codelab\"])();\n\n\n//# sourceURL=webpack:///./themes/hugodelab/static/js/index.ts?");

/***/ })

/******/ });