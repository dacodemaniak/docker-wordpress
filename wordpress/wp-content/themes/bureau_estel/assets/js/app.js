/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _contact_form_contact_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-form/contact-form */ "./src/contact-form/contact-form.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parallax_parallax_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallax/parallax-module */ "./src/parallax/parallax-module.ts");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_3__);



/**
 * @name app.ts
 * @author IDea Factory
 * @version 1.0.0
 * @abstract Entry point for app loading
 */
// Imports main.scss

class App {
    constructor() {
        console.log('App works after document is ready !');
        const parallaxModule = new _parallax_parallax_module__WEBPACK_IMPORTED_MODULE_2__["ParallaxModule"]('.js-parallax');
        // Contact form manager
        const contactForm = new _contact_form_contact_form__WEBPACK_IMPORTED_MODULE_0__["ContactForm"]();
    }
}
jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(() => {
    const app = new App();
});


/***/ }),

/***/ "./src/contact-form/contact-form.ts":
/*!******************************************!*\
  !*** ./src/contact-form/contact-form.ts ***!
  \******************************************/
/*! exports provided: ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class ContactForm {
    constructor() {
        this.requiredFields = (new Map())
            .set('your-name', jquery__WEBPACK_IMPORTED_MODULE_0__('#name'))
            .set('your-email', jquery__WEBPACK_IMPORTED_MODULE_0__('#email'));
        this.form = jquery__WEBPACK_IMPORTED_MODULE_0__('form.wpcf7-form');
        this.button = jquery__WEBPACK_IMPORTED_MODULE_0__('#send');
        this._setListeners();
    }
    _setListeners() {
        this.form.on('keyup', (event) => this._checkForm(event));
        [].forEach.call(document.querySelectorAll('.form-control'), (element) => {
            element.onblur = () => {
                this._errorHandler(element);
            };
            element.onfocus = () => {
                this._resetHandler(element);
            };
        });
    }
    _checkForm(event) {
        let isFormValid = true;
        this.requiredFields.forEach((element, key) => {
            if (element.val().toString().trim().length === 0) {
                isFormValid = false;
            }
            else {
                if (key === 'your-email') {
                    isFormValid = this._emailPattern(element.val().toString().trim());
                }
            }
        });
        if (isFormValid) {
            this.button.removeAttr('disabled');
        }
        else {
            this.button.attr('disabled', 'disabled');
        }
    }
    _errorHandler(element) {
        const jqueryElement = jquery__WEBPACK_IMPORTED_MODULE_0__(element);
        let errorDiv;
        let specialDiv;
        if (jqueryElement.val().toString().trim().length === 0) {
            specialDiv = jquery__WEBPACK_IMPORTED_MODULE_0__('div.' + jqueryElement.attr('id') + '-empty');
            specialDiv.removeClass('hidden');
            errorDiv = jquery__WEBPACK_IMPORTED_MODULE_0__('div.' + jqueryElement.attr('id') + '-has-error');
            errorDiv.removeClass('hidden');
        }
        else {
            if (jqueryElement.attr('id') === 'email') {
                if (!this._emailPattern(jqueryElement.val().toString().trim())) {
                    errorDiv = jquery__WEBPACK_IMPORTED_MODULE_0__('div.' + jqueryElement.attr('id') + '-has-error');
                    errorDiv.removeClass('hidden');
                    specialDiv = jquery__WEBPACK_IMPORTED_MODULE_0__('div.' + jqueryElement.attr('id') + '-invalid');
                    specialDiv.removeClass('hidden');
                }
            }
        }
    }
    _resetHandler(element) {
        const jqueryElement = jquery__WEBPACK_IMPORTED_MODULE_0__(element);
        const errorDiv = jquery__WEBPACK_IMPORTED_MODULE_0__('div.' + jqueryElement.attr('id') + '-has-error');
        errorDiv.addClass('hidden');
    }
    _emailPattern(value) {
        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(value);
    }
}


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/parallax/parallax-module.ts":
/*!*****************************************!*\
  !*** ./src/parallax/parallax-module.ts ***!
  \*****************************************/
/*! exports provided: ParallaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxModule", function() { return ParallaxModule; });
/* harmony import */ var backpax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backpax */ "./node_modules/backpax/lib/index.js");
/* harmony import */ var backpax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backpax__WEBPACK_IMPORTED_MODULE_0__);

class ParallaxModule {
    constructor(cssClass) {
        new backpax__WEBPACK_IMPORTED_MODULE_0___default.a(cssClass);
        console.log('Parallax module is ready');
    }
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map