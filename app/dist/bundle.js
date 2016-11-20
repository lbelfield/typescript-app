/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _greeter = __webpack_require__(1);

	var _greeter2 = _interopRequireDefault(_greeter);

	var _name = __webpack_require__(2);

	var _name2 = _interopRequireDefault(_name);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var name = new _name2.default();
	var greeter = new _greeter2.default(name);

	console.log(greeter.hello());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var Greeter = function () {
	    function Greeter(name) {
	        _classCallCheck(this, Greeter);

	        this.name = name;
	    }

	    _createClass(Greeter, [{
	        key: "hello",
	        value: function hello() {
	            return "hello " + this.name.luke();
	        }
	    }]);

	    return Greeter;
	}();

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Greeter;
	//# sourceMappingURL=greeter.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var Name = function () {
	    function Name() {
	        _classCallCheck(this, Name);
	    }

	    _createClass(Name, [{
	        key: "luke",
	        value: function luke() {
	            return "luke";
	        }
	    }]);

	    return Name;
	}();

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Name;
	//# sourceMappingURL=name.js.map

/***/ }
/******/ ]);