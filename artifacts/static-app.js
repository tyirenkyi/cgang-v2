(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx//2wBDAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAEsASwDAREAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFCP/EADsQAAEDAwMBBgUCBAYBBQAAAAEAAhEDITESQVFhBBMiMnGBQpGhscEU8FJi0eEjJDNDcoKiU5LC4vH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD9ELg6CAgQgICAgIIBBURVVFBCJ9kAiRwfsiMCkGg3QUUmAzcoI6mMbbIHdMiCAgNpAPkY4QdDZBHAEG6DBpt03+aCinYA5BkdCgoDgOfogswJcNKKqoICAQDlAgcKAqCAgICAgICCaR/ZBUBAQEBAQEBAQEBAQFAOEHAVHNq6D6+yDuQCiBuUAIM1CABPI+6CyTjlBUVktcZAdpJGQMfNEXW3X3ZnVE4tGMoqqgOOEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGC10zadpURu6KKgoOPaDAYAMvZM4yiOtjcHKKvRUCAQQbg2IQQNAGkWAECOEFQEBAQEBAQEBAQCoEXmTiI29VQQEBAQEBAQEBAQEBAQEBAQIhBAFEU2Qoqqb/hRHOoCXt4DmmOgyg6NEDpwgqqiBAQBhQFQQEBAQQuaM45iyCoCBG4ygjjBb1MH3UFm8dJVBAQEBAQEBAQJBwZix9UBAQEBAQEBACAoCIIrMG2/KIbqIoJJhWLFQFVAgjHamgxEoKgICAgIAQTSRdvu3Y/0QUEH8hAQR3lPS49roBc3UBuQSPQKCggiQgKggIAIIBGCgICBx0QSRfSOpi0zuoiyPnhVRAQEBAQEBQFQQECFBlzUZsQZPMbIRqbgI0SJjpKoCD/RQRvla05Ix6KjSAgICAgICARKAgIOdVrnaGiQJIcRkCCoNgBoDQMD9ygoET1VBAQQPaXOaPM3IP3UFVBAQZLvEGgXN/QKI1zt+8ooqCBKgEgIMF5mIQUTGcoF8IigoqqgghIwSoGyVGHua0gGBOJ3PCglN41uZcRGl2QZE2PRVXQygAmeiAHA2FyMxsgy6pEgebhBRrObWFsoEkZPsg0DKoSggcDMGYsgsbICAgA56GEBAQEGdQzNvRRGlVTWNWi85FrfNQVUEA3tMHogEi5OAg5VaxYQA3USpo2HgjqgyKsjBQSjcask/aUGi0nzOtMiLIM6I1xcvOkdAcojoSBMWA+iK4urs1AZM29FDHQOYSIdtzZVEqVdIEXJMABFQVDl9gTaUCfFg6nT7Qg2CCOCMjcKIw4tcCAYc0gh1jBKChhbJ6yqMEPc9w8zPhb6AIo+r4g1vy49UGqbBoLTv5iOqA3Q2zAOsIOVbt1GmDJkxMTx1TRWdpc4yG+G2be6CntDYDLMe6QB15wmitcWmCZd8QPQbIOrMTtt6INKhg9D90BBG/F/yKCoCCSZEY3URUUkTG6oICAgZCgRaJnaSgw9gI4tCDn2h3dgkC5Bt9VBzpODmFxMQ0GAIzuUHoYCImBI+vCoVHObsI5Qc6jiLjPXH0UHN2twfcERMYugxRpxUnVINwfXYIN1GPLm6C0aXWMST0QKdR4dFYAAnSCLtPuce6o6APnSLAE+vsg2xhAaXDxAcoNHM7jdRK87nH9SGiBraQAdyCCqO7A4OeJ8Ni0e10VYJmd0R5mQajiARP3hRXYPlh0yNNrjhUca4rDVpDRIAg56wAoMCg1jCX9QSSIAnyoOuvTqIuJA5sgy6pTfXhwhwEROPVB1b3feOwZyFR2CoyDOLEYn8qDVjb5hUAI9EAb+qAghJgxnZRGaRcR4tsINqqICAgIMd4O9FPfJ9FBtUQ5URw7W5wAgSCCIiQpVYoOfo0lni0zeBfg8IOzH6p8JEWAP7wqMuYHU4adIcZM/0UHNjCTJdqmcnacIOziGtEwBsqObWsa+WkFv8ORfiFBkVNNOTAE3JF56IOlJ7XNIMEG0bGdoQACAWtJLDaBZ7R0O6o6iHNsbYndEQnw87fJRK5AAvFTdjgCeht+VVehVUNj9iojh4WvmCPeyK1Os6RgEEn0CDFYOIcwANIFiTEoNMpNADXeItxP4Cg5ijUNYAO008wIyOQgP7LTa7vnEkiSDxKYNgkNDw2xOwm3RUd2k7+yCwFQIByJQEBBGlhJLSCbTB+SDLydQEW3KiNgQEhBVRAQJEkbjI9UBBhtMBznZc7dTBsBUQwojl2hrXNAdcdOUV56b6YaW6iCbAHeDcyN1B0dWaDV03d4RBIgziAgEtpUyawgugF0Wk7BADHmoX4mLDoEHbQCb3P7yqjhVFRrpYS07uAsZUVr9O8sa0ny3/YTBaXZ2Uza5OyDoHDTqA3vKqNTe2eeUEIJmRHHoolZYweJs+yquuQqqOdpExvFlBlviB9SLIIA46X4IvBsb2ug51WBl6bb4BzAmUG2QRqyDN44QbgRiDygsTY7IDWwAIgdP6IIxha2CflhBpUCAczbBFiggDhkz7QgqDIcPF0Ow5/KgsfPlEGl24hBbooqCAgICAgQoMPaCAMbIOT+ziS6XA8NgW9OEENKm1wqNdJkWebARtAsoL2jvjqgAsjwHJ1HkKiUyGju3uJdoBcI+E2myg602w0CbAAAHMKjWmd0RZRWKjZ3AhBQBMHj6hAbHl4/KBUqNY2TccqINdmcBUXUZ8pg7iCiq7CDOrcoLnxBBRAuLSgqoICAgIISAYNuqC7II46bny4PTr6IKgRcnlAQZa9rsKI0qogICAgILCDlWcW03PIMNv4cwoJ3bnNGq+8fUIOhEtOxI+SDApua0CQ+AA8m0kboI4hrAJjMb9UHGnSqkGo140OE+ImbmbqD0AOMEOgEYgKomtzfNj+IfnhA8ZuLE4nCDUn5/dAMkfzC4lBAGl+oCJH2OEUqD/DqTggn6INAiB1RFhFFQQEBAvayAgIAHzQEBA/cIMlpLS2c4J4lBpAQR0xAz1URKbAwQDKK0gKggICBI2ug5ktcRLdR9cKDUObgl44OfblUVrgRIMg4UAmLboMMq6toQbkAoj59DtDqhfSbIDSWCRBMeafmFFe5gdoaCYgXVQAAtn1QUNDfKLHZAJabHBz6oI07E+Ib8jlAeCCHNN8EbGbIIXEtMiJBEIK2IaSIMC3FkF1tG8ziEF1eyKpIGVQQEBAQEBAQEBBGvY4S0yLieoMFQARfoqKg51C4uAbad1EbaIzndAvM7QiqqI4u24N+uyg40KlUN/wAY6r+YbIBqF7SGnP7yg6Q0tGwFxeAgnhYIADW9LBET9Q3WGC7iYtsmq6Ft5FnHJ59VRhtRjnubPjbYtUQ0AgoMNJJAPS6K8/YWtqVKtaACSYN7g2Nji4soj23VELoBMT0Cg5N7RqaIaQ4/CdvVDG3NO7obvCoy0sedIcXEYdx7oNObVG4c3qLoK4EggWlQeUNLHtolxLQ2TJJPzRXZz3svAdJ8MCPY3VEa999b/wD27KDVIlxDi4HULkIO6ohcAgjKmsmJAG6DRwqOVM1WvLHku3BOw6woOjnNaCXEBoyUBr2uBLbgb7H05QRz4xcm0II57oOlpLtth80BrTMk+0oNGzibYjqgoxwqCCExn5qCoCoHCDh2ghtAlwME3jN+OVBx7GW9y3zBogwQcCyD0mXARhw8sX9kHncyq5oY4ARJJFzZQdAxjXg/Fd0mJmMhUdqb9TZ3GYQZp0QCXEQ5xmOEGhhEc2k6p4QGUW0/KCCSS48k3ug6WJvlBglrZl0c8IMaXCprtoLbFQSq7VAAkm8TkcordPU0OJiBiERTVeCQ9pjZ7biOu4VEc/x0wLsfq1H0EhQH0XP8ri10QCLFUcoIpNdVqd615kvIDPk0YUVtopvh8SBI3AVAnQ1xYLNwBhQdGuJbYweYmCqjhWaG+J73OIGmBYHewUV1bWptBcLNAve91Rf1DTV7oeb1uAU0bYxrJDQb5JMoM1GMe0tO4BjoEHKoO7piJggCG2CDme9FdglzhUnSQQA2BebKD1AkNveN1RipULbRmQg4dlNZ1Q99AaGgBs2n95Ug9hJDSckKjHZ3vfTBeIOxGCEg6EAiCqCCNYGzE+IlxnkqCoOT2NdTc0iWnIQZpENGm4ObmUGh4wD8IGEGCx1Qgt8EGSN/dQbdRbcnxO5P7sqFGm5gl7pJtGwGw6oNnzCXXF4xvlBnXD45FvVEQETi+6DUoAEkuFxt7IPP2uia7Ghhc0h0hzDpcDG02PugtLs9ZjGhtYtcBcaQWk+hx7IApvgF7SHDLmXBPpsoOxHhLYOJmLZVFcQ2SVBhzidL2aYEkE3yOioNfUOCBexCCBjGUiT4wHEA5txCKy8kCQ0hwEScxsoDQS0kzNoPqg62YDLo3nYW3VHmqVHd6Gl7S1wLmxYEHqN1BwOqq5wYYDhYNgyRvKg9fZeytpvNQ3cRBMQfVWGvStDy121jWBpHxC8YB9VkO2mpoYWy2bPABI+XCtHQBxa29xi2BhBogGQRffTlBwd3YqaQdDrGc4UEqPe1rtbTot4iRMbyAg9LHNrUpBlpMahvG4VGgROkfCqKgIBQEHPvAS5oHiG2yg1DY1RPTN0DRkHB2HRBXHS2Y9huUEDR+UFi0CyCWe3FuPRBHAkWInaf7IiNaC595FvygsAWItsggktgGD6bIOZeA+HSS42aOiittJJvIP3hVFIJnS7S7mJHyQJfgibZGJ4ugPggSc2Hqg4tBp16dNoDqVQOLgbFrheQOHfdFdQ5wqOAuYkt6FB0wPREcq8w0gx1RSmCGwDa0eqA5zhSJMEyQeEHl7SylUc15pufIMAiBDd46KCdkdTAhpOL/wD1wkHtpVNQmDG0qo6ET0RXN5pUml7jp6m5PQIDml7GkEiRIIsYKDkKVSCARNoOpBst1M0gODnz4haI5QaFJrRqcBqH3QQ0w5uktN8ib/NB0EAAAQB8I2VAm4t6lQZw65sfugt56c7IjSql1BzFLTr0w0vOpzhMl3JQbiBYQURAHANBM2Oon8IrQkDM9UEi0YOVQBkdRkIDmkkFud+oUHNocahtDRBn8INgQ8km0D7oLDZLvYoJG6Iy6i19zbcpiq2iA2CSbyDhMAUhe8gmSDyg0WgoIWAgB1wL+4x8kHn7S2oKvZ+7c0VdR8T/AImxdoj2Sj0y6LgTwCqKojk8nSCiuYqkHSY/e0qDAHfv0OuxriSeQMBBs0nOeGappjcWM8INs7LRYS4gG8n15VwR7gAAHAE2DlB1a9mgEO1BUKlOnVaWPbqGQeCMEHYoPD+pf2rsIqUCXVKmBcOaRnG6g7UNb2tLm6XNJ1s1AwcbIPUAAIC0IWkkXsMhQWAqEKCHlBkBrnCW3b5HHqIlBtUEAzsgKCRI4KCgY55QFRHOaBLiG8E8qCTMEZQc676b2Gk8GKljB0mJ2IQbfUdqMDU/eBAugy2mSdTiZOyDTi1oLjYDJwiK0m1rHBQDUYDBN01TU6QItuUAF24nqP6INKiOAIM7XtmyDk7SKlDLiZIJuRb+6g7KgTAJzCDkagI8Ikg3kqDodIlxw2/yQYDHl7XmLYN5jZBtjGMbpYNLeB1VEdeWi53CgweztJkgQRBHKYMPYBoLAWm4taRCAKfeM8NWRBBIMg8yoMdn7PVptY3WSDYFoGkCJkoOjKFRtZ7tQ0GNMebqD0Vwd1QuoEoCoyTfIAUQ1CDEE7BBO9bMSJ9UVtUEBAQEBBxr0WvYQ64mbqUYqE04bnURZQbY24IvYYtlUbe6ALW2PqiOVSroBA4UVx752o63hgkETb5FB1carGlwdIAvdBlrpAeW+M2cD6WQdqbSbkREZ3sqOu0qhtIwgII1sAD7qCqiEAgtJsRCggpsawNiQBEnJQaHTZUEBAQECAghAg2jmEFQEBAQQ8KCqhlAgcBQcu6pav8ATGZmER1VUJhAQEBAQR2PRQeftGrWwDymFBvS4kEHSbTGPkqI4FwcD7ls39ZQcmaA8jUQ6+bkKCOqkaSW6RrHidAaBieiCVKrhTkHUHEkARccoOjKmum0jB3EflB6Gao8RVGpAjrhUZFnkDBExwf7qDSohNwPUoKcIPPXYS1onGY+iyNUnFoLXHyi5Ko0Kg9EQa57jOG3RVNVgE6gdshBh9dwNmyOmUFFZ0ukS1uwyg0arY94tyg1nqNkRVVEBAQTTcnc7qCqggZEIJpGqZMRGmbKCqggICAgIIQSoOVRrzEcXKAO9jqDe+yDNRwa0NEhxGrHmG/uoDWNB1AXxG6CV6ArUy0g34ifqg6No0w0NDcKjLWnvD4YaLg7INNBBgnqEHXMfRULZQZqF4a5zBqc0Etp41OAsJ2nCgwHOL6LnM0uczxMJEsJEkSMwbIOqoxYmSbDIURwqVCXeGYJz6KK2zxNEfFluEG2FsWPp0hVEeGj4RE2EboJTLSBaDvHzRWrGN5v/wDqIy4tB0uDhaxGPog2xxLRuOiK2qCAgkiYkTmOigqoICAgICAgIE/1QAZ/rsZ4QEHOsX928tBMCfD5rcKCU21oY5xnmbGCg2WAumZERHVBze0OoxMDzNd/CRgoJTpPF3Fp1XMclB0g8wTb+6DUXke6BpEzjqgaRqmLgQqKgFAQc3f67Bw0n6woJVlup4JkCIQZbZjiboPGH1XOGkw0GzcElZV1dVl+ibxb+6qPQ0OEDzg+Yz9bqjiHMBdBEDAO4UHJ9Wp4wAATYt3k8Qi4z33aO8xZouyIg5N1B1p9oqCNZ1jJjaBOFUd6T6R8TLOcbtxf05VBva2EuAExZNHQvIknyoih8iSIExCCEaiLDn1CK2qCAgICAgICAgICBAQEBBNLQIi17euUFsB0CAoBEjhUECUBBHEgtA3N/RBUHN8/qaZGNLp+kKCVS0+EmCRMRsg5O1hkSCbxsJUHGkGmZbE5N5nlB3FNjSCB5R4t5Hqg1SDrki207gdFUYe1hIDgG726qKoY1rbgQcnCBoaA0RBJ3Qahr7HAzH1VHncxwqHTHdtyDfdRXSGMfAHhj5FEdhIGb4BjdVGtB9+UGmiBfKKqoICAgICAgICAgICAgICAgIEoJN5MBBZ3QSTAmxKgEY9ZVAekXQc6gmq2B4g1xnpYKDL6+lzR8RGOfRQUkl7Rp8JMGccqo09osYvzuOqDIZ4xfUD+wgxUrMIBY6ATpJ5UVlzWuIIMgGInnqg2WNIM+KOfsg87u0Mpu0k86d8ZTVO+Y3wE+MAOcLizsE+sIO1Gq0tBmROURtrG96XkmXQA2bQN/dB2aABAxwqKqCAgICAgICAgICAgICAgICAgl0FQZdi+2d1BR9kEtMT4vqguBfZUVBzcf8wP4e7M+7lA7trnB8DUBDTuBwiKGgwYuEFczUWmYLbiMX5RWNP+ICNvsg4dpqMY4PLSTsBsSFCMsc51NodBgDUWzncAIOrQ4tAa4P3BP5Qc20WGqHvaWuAs3ZDWnUKThqAIHrsmGtMYzDRYkx+UHRrW4FoVR1EbIoqCAgICAgICAgICAgWQEBAQEBA+4QZJAbMIMufTdqZILhEjjhQC4QdIJPKDUxkgFBA8TJtJgRvCDQIKDBbPaAT/AOn/APJEdEUCDLnOFmt1ne4AHuUGQWvOlwLXnLTkjod0Q7mjo0Obqbw6/oiuTeztbIaC3UZscR1URssPeapzmIv6qjNUkVqQ/iDhbAIuFFWmHuLmvbAs5p5nKDVNgbJEmVUUAB+c/JBsCEVVQQEBAQEBBl7nWa2znWDuPZQVhJBJ5gRwLKioCAgICAgICCfdQIiyol7qDlXbaRyLIKSQ0gWNzdBwL26RVfJ5ccD2UGmEuc7wFpEdGnlB6WkW0xG6qL/ueyKqoSogqqOY17dLhI+x5CgyC9lnnU3Z+/8A2H5QUxqG83HCIouEGKgA0vPwOBJ6Gx+6K6RFsIEYPCDJZJmdoj8oNBUEBAQEBAKgmpunVI05naFRUEaAGgDAwgqAgIHtKgC+EDfoqCBkKDMCQdPiFgTwcoLafTCCEGTa0IMO1uqaCwd3AOqc9EGT2fwOYMO46YQaZSfp/wASCdwMINOpz4txuiK1ukG+T9OEE/3yf5AP/Ioraom/3BURZRRULfJQYLPECMbjZEa1CYQRxnwxIdlBoXARRUEBAQEBBNI16t4iNlBVRHGGk8BQcO9/y8wfSLxPCD0T4o3ifZUQANycm23soKCqCAgEj+ighaHAhwkHb6oKqBQEBBNz9lAGFQG1kFP15QSfogu8coICDhRGNX+Z0TYU9Uf9iEV0VBAQDZQZHm/5D7IjQuEUsJKoDEje6AgICAgICAgICCOaHNIODwg5dw/utPg1Y8vgj0ypg6uMERlxAPpdUHCRCgqoQgICAgIBmLCTxhAQJnCg5Oq6XFuklwv0QO8qXGn3QapvcbObDt0GoQQgmDFwgCeLcoLF/XKDm6f1BP8AIB/5EoldQiioII7bZRKgu23mFwEI0CCJGCio7yO/4n7KgzyN/wCI+yCoCAghc0bqDma+Q0SQmjo0kySIvZBVQQEBQItCAqCAgICAgICAgZwgy4umxjaIlQZuLuFz9kRO8YXaZuY+qK6NaAIH1yqKgICAgn+5/wBfyoKgKgBBPW8II/EYJweqiIwyS0wHNiR6/hAIIPhuDlv5CKo8TfWyCUiDTaQZECD6WQSq9zBLRKCd4IncIjLnFzhwipUaXXLjpzpFojqoNUmnSDGmecqjqBAVBAQEBQFQ3j3lAQEBAQEEcHRLc8FBUCOUGXMacgFBoYQRzQ4QcKDLaVNpBAghMG1QlQFQQEGYPezsG/lQaVBAQCJsoJBObOGHBAGvVBaI/jB/GUFVAAAQLDYKCXJcHNhos0yDqHMbKhpbwghY3IEFQQ0muIJJgbbJg2qCAgICAgIMOe1tUAm7hYcxeyg0x7XgltwFRTP9kGRME4GxyojSqiAgzUDi3w2PKg0JgTndUEAygQgRbPyQEEhBYPKAgIIJ1niLKCqggICAgz3rA/Q46HbarAjkHBQakII7UWnSYdsSJCCUjVLSaga0zYMJcI6myDSAgICAgICAgICDx9sY5/aGaD4gPLMX59hdQetrQ0mBlBVQQEBAQR/lUSoyb8bIRpFFQQEBAQEBAQQecjoIUFJgICAqCBImJucBAMRDoLdwbhADQ2wEDgIEkYUGKLXNDmkBrQ46AODfO9yg2qCAgICAgICAgIODqT/1negS0MAgnf8AlUHfOfcKggICAoCoGIvhQY7w8YRNaDgRIQVFFQQEBAQEAGcY5UQ3KKIhafXCKSDhUZeXR4cjAOCpqUa6ctLXH3+oRWlRzE06gp/7bwe7P8JFy30IuPkg6IAAGN7n1QEBAQEBAQEBAQZ1+PRG0zsoNKggjpi2dkGWa9J72I/HVBW6rz5fhnPuoNWkc7ICojsGcRsojz77xug1T7zSdHvKLSn3l++nXFv4c7Qg7jAVBAQFAKJWTFpQGYH1QaQEHJ8a9uk5mLx0jhBtuCiRDMOzn39lFa+G391VYrR3Ls7RHmnUMSqK7/WZmPHEeWIGVEav77oJ4otn6oKdkFuiiAqCAgICAgnh1/zQoP/Z"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-universal-component");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(27);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(75);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(77);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(41);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(42);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(78);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(28);

var _helpers = __webpack_require__(79);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(28);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(76)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("global/window");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("global/document");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb8ac3760b4538e7e54f919953cb68f4.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5bc26f5ab13236bb7810f8a516fb14b3.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./455928744_244006.jpg": 88,
	"./cgang-bg.jpg": 43,
	"./cgang1.jpg": 89,
	"./cgang2.png": 29,
	"./chill.jpg": 90,
	"./cynchain.jpg": 16,
	"./cynchaincolor.jpg": 91,
	"./cynmic.jpg": 92,
	"./cynmic2.jpg": 93,
	"./cypurple.jpg": 94,
	"./cyril.jpg": 21,
	"./cyvideo.jpg": 95,
	"./doc.JPG": 22,
	"./dreams.jpg": 31,
	"./green.jpg": 96,
	"./imo.jpg": 32,
	"./issues.jpeg": 30,
	"./lite-modified.jpg": 97,
	"./lite.jpg": 98,
	"./menu-bg.jpg": 8,
	"./moonlight.jpg": 33,
	"./neon.jpg": 18,
	"./outline_play_circle_outline_white_48dp.png": 99,
	"./rude.jpg": 34,
	"./stress.jpg": 35,
	"./switchuptv.jpg": 100,
	"./waave.jpg": 101,
	"./which-side.jpg": 36
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 20;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5da279a6916ced44b0f41b46a2a054ce.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8544049deb227fe71fcdc3b2cd7be2e0.JPG";

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_cgang_bg_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _assets_images_cgang_bg_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_cgang_bg_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__);















function _templateObject17() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  border: none;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: none;\n  cursor: pointer\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 0;\n  left: 20px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding : 0;\n  margin: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  color: #212121;\n  font-weight: bold;\n  border: none;\n  background: none;\n  margin-bottom: 10px;\n  padding: 0;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 75vh;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 150px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 140px;\n  height: 210px;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin-left: 50px;\n  background-image: url(", ");\n  background-position: center center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  border: none;\n  background-image: url(", ");\n  position: absolute;\n  right: 40px;\n  top: 20px;\n  z-index: 1;\n  padding: 5px;\n  margin: 0;\n  border-radius: 5px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 20px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 33px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 59px;\n  font-family: Lacquer;\n  letter-spacing: 2.5px;\n  margin: 0;\n  text-shadow: 5px 0px 0px #4CAF50;\n  color: #000\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 24px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 500px;\n  width: 500px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 110px;\n  padding: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: flex-end;\n  margin-left: 50px;\n  padding: 0;\n  background: #000;\n  flex-direction: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 300%;\n  width: 100%;\n  height: 120vh;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  * {\n    scroll-behavior: smooth;\n  }\n  body {    \n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n  }\n\n  button {\n    outline: none;\n  }\n\n  .links {\n    width: 500px;\n  }\n\n  .content {\n    padding: 0;\n    margin: 0;\n  }\n  a {\n    text-decoration: none;\n    color: #108db8;\n    font-weight: bold;\n  }\n\n  .instruct-tap1 {\n    color: #fff;    \n    font-size: 20px;\n    font-family: Anton;\n    transform: rotate(270deg);\n    margin-top: 150px;\n  }\n\n  video {\n    min-width: 100%;\n    min-height: 100%;\n  }\n\n  .icon {\n    width: 25px;\n    height: 25px;\n    margin-right: 20px;\n    color: #212121\n  }\n\n  .modal-row {\n    position: fixed;\n    top: 0;\n    right: 0;\n  }\n\n  .close {\n    width: 45px;\n    height: 45px;\n    color: #fff;\n  }\n\n  .modal-col {\n    background: rgba(0, 0, 0, 0.5);\n    height: 100vh;\n    min-width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  .booking {\n    display: flex;\n    flex-direction: row;\n    font-size: 12px;\n    color: #212121;\n    font-weight: bold;\n    border: none;\n    background: none;\n    margin-bottom: 10px;\n    padding: 0;\n    justify-content: flex-start;\n    align-items: center;\n    cursor: pointer;\n  }\n\n  .video-thumb {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    transition: opacity 400ms ease 0ms;\n  }.tiny {\n    filter: blur(20px);\n    transform: scale(1.1);\n    transition: visibility 0ms ease 400ms;\n  }\n\n  .menu-icon {\n    width: 30px;\n    height: 35px;\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var Music = react_universal_component__WEBPACK_IMPORTED_MODULE_7___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./components/music",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | components/music */).then(__webpack_require__.bind(null, 49))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './components/music');
  },
  resolve: function resolve() {
    return /*require.resolve*/(49);
  },
  chunkName: function chunkName() {
    return "components/music";
  }
}));
var Video = react_universal_component__WEBPACK_IMPORTED_MODULE_7___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./components/video",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | components/video */).then(__webpack_require__.bind(null, 50))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './components/video');
  },
  resolve: function resolve() {
    return /*require.resolve*/(50);
  },
  chunkName: function chunkName() {
    return "components/video";
  }
}));
var About = react_universal_component__WEBPACK_IMPORTED_MODULE_7___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./components/about",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | components/about */).then(__webpack_require__.bind(null, 51))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './components/about');
  },
  resolve: function resolve() {
    return /*require.resolve*/(51);
  },
  chunkName: function chunkName() {
    return "components/about";
  }
}));
var Mobile = react_universal_component__WEBPACK_IMPORTED_MODULE_7___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./components/mobile",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | components/mobile */).then(__webpack_require__.bind(null, 53))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './components/mobile');
  },
  resolve: function resolve() {
    return /*require.resolve*/(53);
  },
  chunkName: function chunkName() {
    return "components/mobile";
  }
}));
var SlideShow = react_universal_component__WEBPACK_IMPORTED_MODULE_7___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./components/slideshow",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | components/slideshow */).then(__webpack_require__.bind(null, 54))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './components/slideshow');
  },
  resolve: function resolve() {
    return /*require.resolve*/(54);
  },
  chunkName: function chunkName() {
    return "components/slideshow";
  }
}));
var Artists = react_universal_component__WEBPACK_IMPORTED_MODULE_7___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./components/artists",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | components/artists */).then(__webpack_require__.bind(null, 55))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './components/artists');
  },
  resolve: function resolve() {
    return /*require.resolve*/(55);
  },
  chunkName: function chunkName() {
    return "components/artists";
  }
}));

var window = __webpack_require__(14);

var document = __webpack_require__(15);

function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      modal = _useState2[0],
      showModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(document.body.clientWidth),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      windowWidth = _useState4[0],
      setWidth = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('music'),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      card = _useState6[0],
      setCard = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      isVideoLoaded = _useState8[0],
      setIsVideoLoaded = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      loadMenu = _useState10[0],
      setLoadMenu = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      links = _useState12[0],
      showLinks = _useState12[1];

  var toggleLinks = function toggleLinks() {
    showLinks(!links);
  };

  var toggleModal = function toggleModal(card) {
    if (modal === false) {
      disableScrolling();
    } else {
      enableScrolling();
    }

    showModal(!modal);
    setCard(card);
  };

  var onLoadedData = function onLoadedData() {
    setIsVideoLoaded(true);
  };

  var toggleMenu = function toggleMenu() {
    setLoadMenu(!loadMenu);
  };

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;

    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener('resize', setWidth(document.body.clientWidth));
    return window.removeEventListener('resize', setWidth(document.body.clientWidth));
  });
  console.log(windowWidth);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fonts_fonts__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", null, "CGANG Official Website")), windowWidth > 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xl: 12,
    sm: 12,
    md: 12,
    lg: 12,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Logo, {
    src: __webpack_require__(29)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Background, null), modal &&
  /*#__PURE__*/
  // <Col xl={12} md={12} lg={12} sm={12} style={{margin: 0, padding: 0}} className='modal-col'>
  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ModalDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CloseButton, {
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiX"], {
    className: "close"
  })), card === 'music' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Music, null), card === 'video' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Video, null), card === 'about' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(About, null), card === 'artists' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Artists, null)) // {/* </Col> */}
  , !modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuButton, {
    onClick: toggleMenu
  }, loadMenu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiX"], {
    className: "menu-icon"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiMenu"], {
    className: "menu-icon"
  })), loadMenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NavbarDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default.a, {
    big: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NavList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('music');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiMusic"], {
    className: "icon"
  }), "MUSIC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('video');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiVideo"], {
    className: "icon"
  }), "VIDEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('about');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiInfo"], {
    className: "icon"
  }), "ABOUT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('artists');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosPeople"], {
    className: "icon"
  }), "ARTISTS")))))))), windowWidth > 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xl: 12,
    md: 12,
    lg: 12,
    sm: 12,
    style: {
      margin: 0,
      padding: 0
    },
    className: "modal-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ModalDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CloseButton, {
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiX"], {
    className: "close"
  })), card === 'music' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Music, null), card === 'video' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Video, null), card === 'about' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(About, null)))), windowWidth > 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      'flex-direction': 'row',
      display: 'flex',
      'top': '20vh',
      left: '15vw',
      position: 'absolute',
      width: '100%',
      padding: 0
    },
    className: "col-xl-12 col-lg-12 col-md-12 col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ArtDiv, {
    className: "col-xl-4 col-lg-6 col-md-6 col-sm-12 offset-md-2 offset-lg-3 offset-xl-1",
    style: {
      background: 'transparent'
    },
    onClick: toggleLinks
  }, links && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "icon-link",
    href: "https://open.spotify.com/album/4Uud7Rp9sIPQvXuJUNfMJ7",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__["FaSpotify"], {
    className: "s-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "icon-link",
    href: "https://soundcloud.com/cypaq/issues-wroadman-remy-prod-by-kerum",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__["FaSoundcloud"], {
    className: "c-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "icon-link",
    href: "https://music.apple.com/gh/album/issues-single/1503332767",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__["FaApple"], {
    className: "a-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Art, {
    src: __webpack_require__(30)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescDiv, {
    className: "col-xl-4 col-lg-4 col-md-4 col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescTitle, null, "NEW SINGLE OUT NOW"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SongTitle, null, "ISSUES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Data, null, "CYPAQ & ROADMAN REMY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Data1, null, "TAP ART TO STREAM"))), windowWidth < 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Mobile, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, windowWidth > 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SlideShow, {
    windowWidth: windowWidth
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(GlobalStyle, null));
}

var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());
var Background = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject2(), _assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_10___default.a);
var ArtDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject3());
var DescDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject4());
var Art = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img(_templateObject5());
var DescTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject6());
var SongTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject7());
var Data = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject8());
var Data1 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject9());
var MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button(_templateObject10(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_9___default.a);
var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject11(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_9___default.a);
var NavbarDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject12());
var Navbutton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button(_templateObject13());
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul(_templateObject14());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img(_templateObject15());
var ModalDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject16());
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button(_templateObject17());
/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(27);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(13);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aed31f533688300c2c55346a10e3688c.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e0c7cc8b2af76d3d577441bf0e71e05b.jpeg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "412c4d1c9852ff1604aee041eb214d6d.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7633e5023f83d12683a760b0fec15a17.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7f271409f17675adac2c6572df686212.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d742b0b52c906a7b0fed14b87f8f598.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d3c2d39e83b29d1ae3e39fc1ba2be19.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e5ae34d8a927860e97bd989bd986b885.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_applejeewce_react_projects_cgangV2_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _Users_applejeewce_react_projects_cgangV2_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_applejeewce_react_projects_cgangV2_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/applejeewce/react-projects/cgangV2/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/applejeewce/react-projects/cgangV2/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_applejeewce_react_projects_cgangV2_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/applejeewce/react-projects/cgangV2/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/applejeewce/react-projects/cgangV2",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("/Users/applejeewce/react-projects/cgangV2/node_modules/react-static/lib/browser");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);












Object(_Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/applejeewce/react-projects/cgangV2/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/applejeewce/react-projects/cgangV2/src/pages/404 */).then(__webpack_require__.bind(null, 44))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/applejeewce/react-projects/cgangV2/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return "Users/applejeewce/react-projects/cgangV2/src/pages/404";
  }
}), universalOptions);
t_0.template = '/Users/applejeewce/react-projects/cgangV2/src/pages/404.js';
var t_1 = _Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/applejeewce/react-projects/cgangV2/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/applejeewce/react-projects/cgangV2/src/pages/about */).then(__webpack_require__.bind(null, 45))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/applejeewce/react-projects/cgangV2/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return "Users/applejeewce/react-projects/cgangV2/src/pages/about";
  }
}), universalOptions);
t_1.template = '/Users/applejeewce/react-projects/cgangV2/src/pages/about.js';
var t_2 = _Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/applejeewce/react-projects/cgangV2/src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/applejeewce/react-projects/cgangV2/src/pages/blog */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/applejeewce/react-projects/cgangV2/src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "Users/applejeewce/react-projects/cgangV2/src/pages/blog";
  }
}), universalOptions);
t_2.template = '/Users/applejeewce/react-projects/cgangV2/src/pages/blog.js';
var t_3 = _Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/applejeewce/react-projects/cgangV2/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/applejeewce/react-projects/cgangV2/src/pages/index */).then(__webpack_require__.bind(null, 47))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/applejeewce/react-projects/cgangV2/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(47);
  },
  chunkName: function chunkName() {
    return "Users/applejeewce/react-projects/cgangV2/src/pages/index";
  }
}), universalOptions);
t_3.template = '/Users/applejeewce/react-projects/cgangV2/src/pages/index.js';
var t_4 = _Users_applejeewce_react_projects_cgangV2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/applejeewce/react-projects/cgangV2/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/applejeewce/react-projects/cgangV2/src/containers/Post */).then(__webpack_require__.bind(null, 48))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/applejeewce/react-projects/cgangV2/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(48);
  },
  chunkName: function chunkName() {
    return "Users/applejeewce/react-projects/cgangV2/src/containers/Post";
  }
}), universalOptions);
t_4.template = '/Users/applejeewce/react-projects/cgangV2/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/applejeewce/react-projects/cgangV2/src/pages/404.js': t_0,
  '/Users/applejeewce/react-projects/cgangV2/src/pages/about.js': t_1,
  '/Users/applejeewce/react-projects/cgangV2/src/pages/blog.js': t_2,
  '/Users/applejeewce/react-projects/cgangV2/src/pages/index.js': t_3,
  '/Users/applejeewce/react-projects/cgangV2/src/containers/Post': t_4
}); // Not Found Template

var notFoundTemplate = "/Users/applejeewce/react-projects/cgangV2/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "73660d8e55870dc0385d8e453f310f27.jpg";

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);

 //


function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      to: "/blog/post/".concat(post.id, "/")
    }, post.title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);

 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/blog/"
  }, '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Music; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: bold;\n  color: #424242;\n  margin-left: 40px;\n  margin-right: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-image: url(", ");\n  height: 400px;\n  margin-top: 120px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  .music-row {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n    margin: 0;\n    align-items: center;\n  }\n\n  .content {\n    margin: 0;\n    padding: 0;\n  }\n\n  .music-icon {\n    width: 80px;\n    height: 80px;\n    color: #424242;\n  }\n\n  a:link, a:visited{\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function Music() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "music-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    md: 6,
    lg: 6,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MusicDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://open.spotify.com/artist/0qtXMXS8YFH0brVOrfnUqb",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSpotify"], {
    className: "music-icon",
    color: '#43A047'
  }), "Spotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://soundcloud.com/cypaq",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSoundcloud"], {
    className: "music-icon",
    color: '#FF3D00'
  }), "Soundcloud")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://itunes.apple.com/us/artist/cypaq/id1222975035",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaApple"], {
    className: "music-icon",
    color: 'gray'
  }), "MUSIC"))))));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
var MusicDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);
var IconDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Video; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-image: url(", ");\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 25px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  .content {\n    padding: 0;\n    margin: 0;\n  }\n\n  .video-row {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n    margin: 0;\n    align-items: center;\n    height: 100vh;\n\n  }\n\n  a:link, a:visited{\n    text-decoration: none;\n  }\n\n  iframe {\n    width: 100%;\n    height: 50vh\n  }\n\n  .video-content {\n    width: 100%;\n    height: 500px;\n    overflow: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function Video() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "video-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 7,
    md: 7,
    lg: 7,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/6ibNFeRNF7I",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/ngodNAE3P1k",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/ngMJbTTYYmU",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/zObTOW4ezAg",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/LAxgnEYfqrk",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/OWdkA-M09P4",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/i8IodlKEmVw",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/VzpclTcDevE",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }))))));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
var VideoDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);
var VideoTile = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_7__);



function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  font-size: 16px;\n  color: #000\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin-top: 15vh;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 80px;\n  height: 80px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  border: none;\n  text-decoration: none;\n  opacity: 0.6;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: flex;\n  overflow-x: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  height: 300px;\n  width: 350px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  height: 80vh;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-image: url(", ");\n  padding: 20px;\n  flex-direction: column\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  .content {\n    padding: 0;\n    margin: 0;\n  }\n  \n  .about-row {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n    margin: 0;\n    align-items: center;\n    height: 100vh;\n  }\n\n  .switchContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  button {\n    outline: none;\n  }\n  button: hover {\n    opacity: 1\n  }\n\n  button: focus {\n    opacity: 1\n  }\n\n  .wide {\n    width: 80px;\n    height: 50px;\n  }\n\n  .long {\n    width: 70px;\n    height: 100px;\n  }\n\n  .social-icon {\n    width: 2vw;\n    height: 6vh; \n    margin: 10px\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var window = __webpack_require__(14);

var document = __webpack_require__(15);

var wide = {
  height: '280px',
  width: '400px'
};
var _long = {
  height: '400px',
  width: '280px'
};
var mobileDefault = {
  height: '200px',
  width: '225px'
};
var mobileLong = {
  height: '300px',
  width: '200px'
};
var mobileWide = {
  height: '140px',
  width: '220px'
};
function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "about-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xl: 5,
    md: 7,
    lg: 7,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AboutDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitch, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bio, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Social, null)))));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
var AboutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_7___default.a);

var ImageSwitch = function ImageSwitch() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('cyril.jpg'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(document.body.clientWidth),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      windowWidth = _useState6[0],
      setWidth = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('resize', setWidth(document.body.clientWidth));
    return window.removeEventListener('resize', setWidth(document.body.clientWidth));
  });

  function switchImage(item) {
    setImage(item);

    switch (item) {
      case 'cynchain.jpg':
        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'cyril.jpg':
        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'doc.JPG':
        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      case 'cynmic2':
        if (windowWidth < 740) {
          setSize(mobileLong);
        } else {
          setSize(_long);
        }

        break;

      case 'cypurple':
        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      default:
        break;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "switchContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MainImage, {
    src: __webpack_require__(20)("./".concat(image)),
    style: size
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitchDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('cynchain.jpg');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(16)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('cyril.jpg');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(21)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('doc.JPG');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(22),
    className: "wide"
  })))));
};

var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject4());
var ImageSwitchDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var SwitchRow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6());
var SwitchButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject7());
var SwitchImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject8());

var Bio = function Bio() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioText, null, "Christian Gang is a collection of creatives and a possible movement that stands for the freedom of creation of art with christian boundaries.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Christian Gang stands on the bible verse Matthew 28:19-20; which says 'Go ye therefore and teach all nations baptizing them in the name of the Father and of the Son and of the Holy Ghost. Teaching them to observe all things whatsoever I have commanded you: and, lo I am with you alway even onto the end of the world, Amen'", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "C Gang was created in 2014 when Cypaq was in high school with its first release being 'Intro' by Mad For Christ (MFC) which was a collection of artists Snek.B, Dapsi & Cypaq. MFC later broke apart which later led to the creation of Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "The first official release under Christian Gang was 'What They Can't' by Snek.B & Cypaq which was recieved well by the masses. Christian Gang was later home to artists such as Donaj, Bravol Forlany,Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Years later after a lot of succesful releases and projects some artists went onto their own paths which would see Christian Gang become home to just one artist (Cypaq) and one act (Snek.B & Cypaq)."));
};

var BioDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject9());
var BioText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject10());

var Social = function Social() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SocialDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.instagram.com/cypaq/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaInstagram"], {
    color: '#D500F9',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCb-sjS_Agdipf3pBA1prI7A",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaYoutube"], {
    color: 'crimson',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://twitter.com/thecypaq",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTwitter"], {
    color: '#1976D2',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.facebook.com/cypaq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaFacebook"], {
    color: '#303F9F',
    className: "social-icon"
  })));
};

var SocialDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject11());

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mobile; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(102);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_14__);











function _templateObject20() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 45%;\n  height: 100vh;\n  background-image: url(", ");\n  top: 0;\n  left: 0;\n  position: absolute;\n  z-index: 1;\n  transform: translateX(-100%);\n  -webkit-transform: translateX(-100%);\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  \n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n  background: #000;\n  padding: 0;\n  margin: 0\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 22px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 40px;\n  font-family: Lacquer;\n  text-shadow: 5px 0px 0px #6A1B9A;\n  letter-spacing: 2.5px;\n  margin: 0\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 14px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 400px;\n  width: 100%;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 30px;\n  padding: 0;\n  margin-left: 15px\n  height: 520px\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  margin-top: 0px;\n  padding: 0;\n  border: 0;\n  background: #000\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  position: absolute;\n  top: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  border: none;\n  background-image: url(", ");\n  position: absolute;\n  right: 20px;\n  top: 30px;\n  z-index: 1;\n  padding: 5px;\n  margin: 0;\n  border-radius: 5px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  top: 0;\n  width: 100px;\n  height: 100px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  width: 100%;\n  height: 120vh;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  border: none;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  background: none;\n  cursor: pointer\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: fixed;\n  top: 0;\n  background: rgb(0,0,0,0.8);\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding : 20px;\n  margin: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  color: #212121;\n  font-weight: bold;\n  border: none;\n  background: none;\n  margin-bottom: 10px;\n  padding: 0;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 33px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  .content-container {\n    padding: 0;\n    margin: 0;\n    background: #000\n  }\n\n  iframe {\n    width: 85%;\n    height: 200px;\n  }\n\n  .icon-link {\n    margin: 20px;\n  }\n\n  .instruct-tap {\n    color: #000;    \n    font-size: 20px;\n    font-family: Anton;\n    position: absolute;\n    left: -45px;\n    transform: rotate(90deg);\n    margin-top: 200px;\n  }\n\n\n  .instruct {\n    color: #fff;\n    background: #000;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    font-size: 20px;\n    height: 70px;\n    \n  }\n\n  .tap{\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    transform-origin: bottom;\n  }\n\n  .bounce-2 {\n    animation-name: bounce-2;\n    animation-timing-function: ease;\n  }\n  \n  @keyframes bounce-2 {\n    0%   { transform: translateY(0); }\n    50%  { transform: translateY(-20px); }\n    100% { transform: translateY(0); }\n  }\n\n  .instruct-swipe {\n    color: #fff;\n    background: #000;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    font-size: 20px;\n    height: 70px;\n    font-family: Anton;\n    margin-bottom: 0\n  }\n\n  .black {\n    color: #4CAF50;\n  }\n\n  .swipe{\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    transform-origin: bottom;\n  }\n\n  .wiggle {\n    animation-name: wiggle;\n    animation-timing-function: ease;\n  }\n  \n  @keyframes wiggle {\n    0%   { transform: translateX(0); }\n    50%  { transform: translateX(-20px); }\n    100% { transform: translateX(0); }\n  }\n\n  .links {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: opacity 400ms ease 0ms;\n    z-index: 1;\n  }\n\n  .spotify {\n    font-size: 20px;\n    color: #43A047\n  }\n\n  .apple {\n    font-size: 22px;\n    font-weight: bold;\n    color: #fff;\n  }\n\n  .sound {\n    font-size: 16px;\n    color: #E65100\n  }\n\n  .s-icon {\n    width: 50px;\n    height: 50px;\n    color: #76FF03;\n  }\n\n  .c-icon {\n    width: 50px;\n    height: 50px;\n    color: #FF6F00;\n  }\n\n  .a-icon {\n    width: 50px;\n    height: 50px;\n    color: #757575\n  }\n\n  .mobile-icon {\n    width: 25px;\n    height: 25px;\n    margin-right: 30px;\n    color: #212121\n  }\n\n  a {\n    text-decoration: none;\n    color: #108db8;\n    font-weight: bold;\n  }\n\n  @keyframes slide-in {\n    100% { transform: translateX(0%); }\n  }\n\n  @-webkit-keyframes slide-in {\n    100% { -webkit-transform: translateX(0%); }\n  }\n\n  @keyframes slide-out {\n    0% { transform: translateX(0%); }\n    100% { transform: translateX(-100%); }\n  }\n\n  @-webkit-keyframes slide-out {\n    0% { -webkit-transform: translateX(0%); }\n    100% { -webkit-transform: translateX(-100%); }\n  }\n\n  .slide-in {\n    animation: slide-in 0.5s forwards;\n    -webkit-animation: slide-in 0.5s forwards;\n  }\n\n  .slide-out {\n    animation: slide-out 0.5s forwards;\n    -webkit-animation: slide-out 0.5s forwards;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var Music = react_universal_component__WEBPACK_IMPORTED_MODULE_14___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./mobile_music",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mobile_music */).then(__webpack_require__.bind(null, 56))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './mobile_music');
  },
  resolve: function resolve() {
    return /*require.resolve*/(56);
  },
  chunkName: function chunkName() {
    return "mobile_music";
  }
}));
var Video = react_universal_component__WEBPACK_IMPORTED_MODULE_14___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./mobile_video",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mobile_video */).then(__webpack_require__.bind(null, 57))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './mobile_video');
  },
  resolve: function resolve() {
    return /*require.resolve*/(57);
  },
  chunkName: function chunkName() {
    return "mobile_video";
  }
}));
var About = react_universal_component__WEBPACK_IMPORTED_MODULE_14___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./mobile_about",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mobile_about */).then(__webpack_require__.bind(null, 58))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './mobile_about');
  },
  resolve: function resolve() {
    return /*require.resolve*/(58);
  },
  chunkName: function chunkName() {
    return "mobile_about";
  }
}));
var Mobile_Artists = react_universal_component__WEBPACK_IMPORTED_MODULE_14___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_3___default()({
  id: "./mobile_artists",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mobile_artists */).then(__webpack_require__.bind(null, 59))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, './mobile_artists');
  },
  resolve: function resolve() {
    return /*require.resolve*/(59);
  },
  chunkName: function chunkName() {
    return "mobile_artists";
  }
}));
var styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff'
  },
  slide1: {
    'text-shadow': '5px 0px 0px #263238',
    'color': '#757575'
  },
  slide2: {
    'text-shadow': '5px 0px 0px #4CAF50',
    'color': '#000'
  },
  slide3: {
    background: '#6AC0FF'
  }
};
var music = [{
  art: __webpack_require__(32),
  title: 'IMO',
  artists: 'CYPAQ & TIKKI',
  style: {
    'text-shadow': '5px 0px 0px #B71C1C',
    'color': '#F57C00'
  },
  spotify: 'https://open.spotify.com/album/1aqsWv6DDxWjexgplOGDgL?highlight=spotify:track:5sSiAzM6TpTyx5u8EmcFsb',
  sound: 'https://soundcloud.com/cypaq/imo-wtikki-prod-by-rome?in=cypaq/sets/cypaq-complete-collection',
  apple: 'https://music.apple.com/us/album/imo/1501861288?i=1501861291&app=music&ign-mpt=uo%3D4',
  itemStyle: {
    background: 'rgba(76, 175, 80, 1)'
  }
}, {
  art: __webpack_require__(35),
  title: 'STRESS',
  artists: 'CYPAQ',
  style: {
    'text-shadow': '5px 0px 0px #F50057',
    'color': '#64B5F6'
  },
  spotify: 'https://open.spotify.com/album/7h8MPxiuBTkppf4YmM1gIL',
  sound: 'https://soundcloud.com/cypaq/stress-prod-by-rome',
  apple: 'https://music.apple.com/us/album/stress-single/1500378307?app=music&ign-mpt=uo%3D4',
  itemStyle: {
    background: 'rgba(100, 181, 246, 0.6)'
  }
}, {
  art: __webpack_require__(31),
  title: 'DREAMS',
  artists: 'DOC. SKILL, CYPAQ & TIKI FT. PERCY K',
  style: {
    'text-shadow': '5px 0px 0px #F48FB1',
    'color': '#02132b'
  },
  spotify: 'https://open.spotify.com/album/2iOa2vV2TnL3FK3m5xlRLv',
  sound: null,
  apple: null,
  itemStyle: {
    background: 'rgba(2, 19, 43, 0.6)'
  }
}, {
  art: __webpack_require__(34),
  title: 'RUDE',
  artists: 'CYPAQ FT. DR. LAYLOW & BULLY',
  style: {
    'text-shadow': '5px 0px 0px #6A1B9A',
    'color': '#D500F9'
  },
  spotify: 'https://open.spotify.com/album/58UkvHwsmpo21IbPXAcNP7',
  sound: 'https://soundcloud.com/cypaq/rude-feat-drlaylow-bully',
  apple: 'https://music.apple.com/us/album/rude-feat-dr-laylow-bully-single/1499127241?app=music&ign-mpt=uo%3D4',
  itemStyle: {
    background: 'rgba(213, 0, 249, 0.6)'
  }
}, {
  art: __webpack_require__(33),
  title: 'MOONLIGHT',
  artists: 'CYPAQ FT. KHAM',
  style: {
    'text-shadow': '5px 0px 0px #263238',
    'color': '#757575'
  },
  spotify: 'https://open.spotify.com/album/4PMh8RgIyxrAsO8BNOkmsH',
  sound: 'https://soundcloud.com/cypaq/moonlight-feat-kham',
  apple: 'https://music.apple.com/gh/album/moonlight-feat-kham-single/1485770386',
  itemStyle: {
    background: 'rgba(117, 117, 117, 0.6)'
  }
}];
function Mobile() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      loadDrawer = _useState2[0],
      setLoadDrawer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('music'),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      card = _useState4[0],
      setCard = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      modal = _useState6[0],
      showModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      links = _useState8[0],
      showLinks = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      feature = _useState10[0],
      showFeature = _useState10[1];

  var toggleDrawer = function toggleDrawer() {
    if (loadDrawer === false) {
      disableScrolling();
    } else {
      enableScrolling();
    }

    setLoadDrawer(!loadDrawer);
  };

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;

    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  var toggleModal = function toggleModal(card) {
    showModal(!modal);
    setCard(card);
  };

  var toggleLinks = function toggleLinks() {
    showLinks(!links);
  };

  var toggleFeatureLink = function toggleFeatureLink() {
    showFeature(!feature);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    className: "content-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Drawer, {
    className: loadDrawer ? 'slide-in' : 'slide-out'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NavList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('music');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiMusic"], {
    className: "mobile-icon"
  }), "MUSIC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('video');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiVideo"], {
    className: "mobile-icon"
  }), "VIDEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('about');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiInfo"], {
    className: "mobile-icon"
  }), "ABOUT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Navbutton, {
    onClick: function onClick() {
      return toggleModal('artists');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_10__["IoIosPeople"], {
    className: "mobile-icon"
  }), "ARTISTS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Logo, {
    src: __webpack_require__(29)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      'flex-direction': 'column',
      display: 'flex',
      'margin-top': '30vh',
      'position': 'absolute',
      'top': '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ArtDiv, {
    className: "col-xl-6 col-lg-6 col-md-6",
    onClick: toggleFeatureLink
  }, feature && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "icon-link",
    href: 'https://open.spotify.com/album/4Uud7Rp9sIPQvXuJUNfMJ7',
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaSpotify"], {
    className: "s-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "icon-link",
    href: 'https://soundcloud.com/cypaq/issues-wroadman-remy-prod-by-kerum',
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaSoundcloud"], {
    className: "c-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "icon-link",
    href: 'https://music.apple.com/gh/album/issues-single/1503332767',
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaApple"], {
    className: "a-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Art, {
    src: __webpack_require__(30)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "instruct-tap black"
  }, "Tap to stream")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescDiv, {
    className: "col-xl-6 col-lg-6 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescTitle, null, "NEW SINGLE OUT NOW"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SongTitle, {
    style: styles.slide2
  }, "ISSUES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Artists, null, "CYPAQ & ROADMAN REMY"))), !modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuButton, {
    onClick: toggleDrawer
  }, loadDrawer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_10__["IoIosClose"], {
    className: "menu-icon"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_10__["IoIosMenu"], {
    className: "menu-icon"
  })), modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ModalDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CloseButton, {
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_10__["IoIosClose"], {
    className: "close"
  })), card === 'music' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Music, null), card === 'video' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Video, null), card === 'about' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(About, null), card === 'artists' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Mobile_Artists, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "instruct-swipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "swipe wiggle"
  }, "Swipe for more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_7___default.a, null, music.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SwipeView, {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ArtDiv, {
      className: "col-xl-6 col-lg-6 col-md-6 col-sm-12",
      onClick: toggleLinks
    }, links && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "links",
      style: item.itemStyle
    }, item.spotify && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "icon-link",
      href: item.spotify,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaSpotify"], {
      className: "s-icon"
    })), item.sound && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "icon-link",
      href: item.sound,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaSoundcloud"], {
      className: "c-icon"
    })), item.apple && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "icon-link",
      href: item.apple,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaApple"], {
      className: "a-icon"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Art, {
      src: item.art
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "instruct-tap"
    }, "Tap to stream")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescDiv, {
      className: "col-xl-6 col-lg-6 col-md-6 col-sm-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescTitle, null, "NEW SINGLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SongTitle, {
      style: item.style
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Artists, null, item.artists)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SwipeView, {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ArtDiv, {
    className: "col-xl-6 col-lg-6 col-md-6"
  }, links && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "icon-link",
    href: 'https://soundcloud.com/cypaq/which-side-feat-kiddfresh',
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaSoundcloud"], {
    className: "c-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Art, {
    src: __webpack_require__(36)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "instruct-tap black"
  }, "Tap to stream")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescDiv, {
    className: "col-xl-6 col-lg-6 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescTitle, null, "NEW SINGLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SongTitle, {
    style: styles.slide2
  }, "WHICH SIDE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Artists, null, "CYPAQ & KIDDFRESH")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(GlobalStyle, null));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());
var Data = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject2());
var Navbutton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button(_templateObject3());
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul(_templateObject4());
var ModalDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject5());
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button(_templateObject6());
var Background = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject7(), _assets_images_neon_jpg__WEBPACK_IMPORTED_MODULE_8___default.a);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img(_templateObject8());
var MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button(_templateObject9(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_12___default.a);
var VideoDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject10());
var ArtDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject11());
var DescDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject12());
var Art = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img(_templateObject13());
var DescTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject14());
var SongTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject15());
var Artists = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject16());
var SwipeView = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject17());
var LinkDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject18());
var MusicDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject19());
var Drawer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject20(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_12___default.a);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideShow; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);



function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n  background: #000;\n  padding: 0;\n  margin: 0\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 33px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 59px;\n  font-family: Lacquer;\n  letter-spacing: 2.5px;\n  margin: 0\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 24px;\n  font-family: Anton;\n  letter-spacing: 2.5px;\n  color: #fff;\n  margin: 0\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 500px;\n  width: 500px\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 110px;\n  padding: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0px;\n  padding: 0;\n  background: #000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  * {\n    outline: 0;\n  }\n  .swipe-col {\n    margin:0;\n    padding: 0;\n  }\n\n  .swipe-container {\n    margin: 0;\n    padding: 0\n  }\n\n  .icon-link {\n    margin: 20px;\n  }\n\n  .instruct-swipe {\n    color: #fff;\n    background: #000;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    font-size: 20px;\n    height: 70px;\n    font-family: Anton\n  }\n\n  .swipe{\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    transform-origin: bottom;\n  }\n\n  .wiggle {\n    animation-name: wiggle;\n    animation-timing-function: ease;\n  }\n  \n  @keyframes wiggle {\n    0%   { transform: translateX(0); }\n    50%  { transform: translateX(-20px); }\n    100% { transform: translateX(0); }\n  }\n\n  .instruct-tap {\n    color: #fff;    \n    font-size: 20px;\n    font-family: Anton;\n    position: absolute;\n    left: 0;\n    transform: rotate(270deg);\n    margin-top: 200px;\n  }\n\n  .tap{\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n  }\n\n  .shrink {\n    animation-name: shrink;\n    animation-timing-function: linear;\n  }\n\n  @keyframes shrink{\n    0%   { transform: scale(0.5, 0.5); }\n    50%  { transform: scale(0.8, 0.8); }\n    100% { transform: scale(0.5, 0.5);}\n  }\n\n  .links {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 500px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: opacity 400ms ease 0ms;\n    z-index: 1;\n    background: rgb(0,0,0,0.7);\n  }\n\n  .spotify {\n    font-size: 20px;\n    color: #43A047\n  }\n\n  .apple {\n    font-size: 22px;\n    font-weight: bold;\n    color: #fff;\n  }\n\n  .sound {\n    font-size: 16px;\n    color: #E65100\n  }\n\n  .s-icon {\n    width: 50px;\n    height: 50px;\n    color: #76FF03;\n  }\n\n  .c-icon {\n    width: 50px;\n    height: 50px;\n    color: #FF6F00;\n  }\n\n  .a-icon {\n    width: 50px;\n    height: 50px;\n    color: #757575\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff'
  },
  slide2: {
    'text-shadow': '5px 0px 0px #F57F17',
    'color': '#FFFF00'
  },
  slide3: {
    background: '#6AC0FF'
  },
  smallImage: {
    'width': '300px',
    'height': '200px'
  }
};
var music = [{
  art: __webpack_require__(32),
  title: 'IMO',
  artists: 'CYPAQ & TIKKI',
  style: {
    'text-shadow': '5px 0px 0px #B71C1C'
  },
  'color': '#F57C00',
  spotify: 'https://open.spotify.com/album/1aqsWv6DDxWjexgplOGDgL?highlight=spotify:track:5sSiAzM6TpTyx5u8EmcFsb',
  sound: 'https://soundcloud.com/cypaq/imo-wtikki-prod-by-rome?in=cypaq/sets/cypaq-complete-collection',
  apple: 'https://music.apple.com/us/album/imo/1501861288?i=1501861291&app=music&ign-mpt=uo%3D4',
  itemStyle: {
    background: 'rgba(76, 175, 80, 1)'
  }
}, {
  art: __webpack_require__(35),
  title: 'STRESS',
  artists: 'CYPAQ',
  style: {
    'text-shadow': '5px 0px 0px #F50057',
    'color': '#64B5F6'
  },
  spotify: 'https://open.spotify.com/album/7h8MPxiuBTkppf4YmM1gIL',
  sound: 'https://soundcloud.com/cypaq/stress-prod-by-rome',
  apple: 'https://music.apple.com/us/album/stress-single/1500378307?app=music&ign-mpt=uo%3D4',
  itemStyle: {
    background: 'rgba(100, 181, 246, 0.6)'
  }
}, {
  art: __webpack_require__(31),
  title: 'DREAMS',
  artists: 'DOC. SKILL, CYPAQ & TIKI FT. PERCY K',
  style: {
    'text-shadow': '5px 0px 0px #F48FB1',
    'color': '#02132b'
  },
  spotify: 'https://open.spotify.com/album/2iOa2vV2TnL3FK3m5xlRLv',
  sound: null,
  apple: null,
  itemStyle: {
    background: 'rgba(2, 19, 43, 0.6)'
  }
}, {
  art: __webpack_require__(34),
  title: 'RUDE',
  artists: 'CYPAQ FT. DR. LAYLOW & BULLY',
  style: {
    'text-shadow': '5px 0px 0px #6A1B9A',
    'color': '#D500F9'
  },
  spotify: 'https://open.spotify.com/album/58UkvHwsmpo21IbPXAcNP7',
  sound: 'https://soundcloud.com/cypaq/rude-feat-drlaylow-bully',
  apple: 'https://music.apple.com/us/album/rude-feat-dr-laylow-bully-single/1499127241?app=music&ign-mpt=uo%3D4',
  itemStyle: {
    background: 'rgba(213, 0, 249, 0.6)'
  }
}, {
  art: __webpack_require__(33),
  title: 'MOONLIGHT',
  artists: 'CYPAQ FT. KHAM',
  style: {
    'text-shadow': '5px 0px 0px #263238',
    'color': '#757575'
  },
  spotify: 'https://open.spotify.com/album/4PMh8RgIyxrAsO8BNOkmsH',
  sound: 'https://soundcloud.com/cypaq/moonlight-feat-kham',
  apple: 'https://music.apple.com/gh/album/moonlight-feat-kham-single/1485770386',
  itemStyle: {
    background: 'rgba(117, 117, 117, 0.6)'
  }
}];
function SlideShow(_ref) {
  var windowWidth = _ref.windowWidth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      links = _useState2[0],
      showLinks = _useState2[1];

  var toggleLinks = function toggleLinks() {
    showLinks(!links);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    fluid: true,
    className: "swipe-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "instruct-swipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "swipe wiggle"
  }, "Swipe for more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      'overflow-x': 'hidden'
    },
    enableMouseEvents: true
  }, music.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwipeView, {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ArtDiv, {
      className: "col-xl-5 col-lg-5 col-md-5 col-sm-12 offset-md-1 offset-lg-1 offset-xl-1",
      onClick: toggleLinks
    }, links && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "links"
    }, item.spotify && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "icon-link",
      href: item.spotify,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaSpotify"], {
      className: "s-icon"
    })), item.sound && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "icon-link",
      href: item.sound,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaSoundcloud"], {
      className: "c-icon"
    })), item.apple && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "icon-link",
      href: item.apple,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaApple"], {
      className: "a-icon"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Art, {
      src: item.art
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "instruct-tap"
    }, "Tap to stream")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescDiv, {
      className: "col-xl-6 col-lg-6 col-md-6 col-sm-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescTitle, null, "NEW SINGLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SongTitle, {
      style: item.style
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Artists, null, item.artists)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwipeView, {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ArtDiv, {
    className: "col-xl-5 col-lg-5 col-md-5 offset-xl-1 offset-md-1 offset-lg-1",
    onClick: toggleLinks
  }, links && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "icon-link",
    href: 'https://soundcloud.com/cypaq/which-side-feat-kiddfresh',
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaSoundcloud"], {
    className: "c-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "instruct-tap"
  }, "Tap to stream"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Art, {
    src: __webpack_require__(36),
    style: windowWidth < 1053 ? styles.smallImage : {}
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescDiv, {
    className: "col-xl-6 col-lg-6 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescTitle, null, "NEW SINGLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SongTitle, {
    style: styles.slide2
  }, "WHICH SIDE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Artists, null, "CYPAQ & KIDDFRESH")))));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
var ArtDiv = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject2());
var DescDiv = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject3());
var Art = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img(_templateObject4());
var DescTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p(_templateObject5());
var SongTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p(_templateObject6());
var Artists = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p(_templateObject7());
var SwipeView = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject8());

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Artists; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6__);



function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 16px;\n  color: #000\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 15vh;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 80px;\n  height: 80px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  border: none;\n  text-decoration: none;\n  opacity: 0.6;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: flex;\n  overflow-x: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 300px;\n  width: 350px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 80vh;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-image: url(", ");\n  padding: 20px;\n  flex-direction: column\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  .content {\n    padding: 0;\n    margin: 0;\n  }\n  \n  .about-row {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n    margin: 0;\n    align-items: center;\n    height: 100vh;\n  }\n\n  .switchContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  button {\n    outline: none;\n  }\n  button: hover {\n    opacity: 1\n  }\n\n  button: focus {\n    opacity: 1\n  }\n\n  .wide {\n    width: 80px;\n    height: 50px;\n  }\n\n  .long {\n    width: 70px;\n    height: 100px;\n  }\n\n  .social-icon {\n    width: 2vw;\n    height: 6vh; \n    margin: 10px\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var window = __webpack_require__(14);

var document = __webpack_require__(15);

var wide = {
  height: '280px',
  width: '400px'
};
var _long = {
  height: '400px',
  width: '280px'
};
var mobileDefault = {
  height: '200px',
  width: '225px'
};
var mobileLong = {
  height: '300px',
  width: '200px'
};
var mobileWide = {
  height: '140px',
  width: '220px'
};
function Artists() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('cyril.jpg'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(document.body.clientWidth),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      windowWidth = _useState6[0],
      setWidth = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('cypaq'),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      bio = _useState8[0],
      toggleBio = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('resize', setWidth(document.body.clientWidth));
    return window.removeEventListener('resize', setWidth(document.body.clientWidth));
  });

  function switchImage(item) {
    setImage(item);

    switch (item) {
      case 'cynchain.jpg':
        toggleBio('cypaq');

        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'cyril.jpg':
        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'doc.JPG':
        toggleBio('doc');

        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      case 'cynmic2':
        if (windowWidth < 740) {
          setSize(mobileLong);
        } else {
          setSize(_long);
        }

        break;

      case 'cypurple':
        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      default:
        break;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "about-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xl: 5,
    md: 7,
    lg: 7,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AboutDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitch, {
    switchImage: switchImage,
    image: image,
    size: size
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bio, {
    bio: bio
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Social, null)))));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
var AboutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);

var ImageSwitch = function ImageSwitch(_ref) {
  var switchImage = _ref.switchImage,
      image = _ref.image,
      size = _ref.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "switchContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MainImage, {
    src: __webpack_require__(20)("./".concat(image)),
    style: size
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitchDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('cynchain.jpg');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(16)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('doc.JPG');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(21),
    className: "wide"
  })))));
};

var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject4());
var ImageSwitchDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var SwitchRow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6());
var SwitchButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject7());
var SwitchImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject8());

var Bio = function Bio(_ref2) {
  var bio = _ref2.bio;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioDiv, null, bio === 'cypaq' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioText, null, "Christian Gang is a collection of creatives and a possible movement that stands for the freedom of creation of art with christian boundaries.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Christian Gang stands on the bible verse Matthew 28:19-20; which says 'Go ye therefore and teach all nations baptizing them in the name of the Father and of the Son and of the Holy Ghost. Teaching them to observe all things whatsoever I have commanded you: and, lo I am with you alway even onto the end of the world, Amen'", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "C Gang was created in 2014 when Cypaq was in high school with its first release being 'Intro' by Mad For Christ (MFC) which was a collection of artists Snek.B, Dapsi & Cypaq. MFC later broke apart which later led to the creation of Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "The first official release under Christian Gang was 'What They Can't' by Snek.B & Cypaq which was recieved well by the masses. Christian Gang was later home to artists such as Donaj, Bravol Forlany,Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Years later after a lot of succesful releases and projects some artists went onto their own paths which would see Christian Gang become home to just one artist (Cypaq) and one act (Snek.B & Cypaq)."), bio === 'doc' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioText, null, "Christian Gang is a collection of creatives and a possible movement that stands for the freedom of creation of art with christian boundaries.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Christian Gang stands on the bible verse Matthew 28:19-20; which says 'Go ye therefore and teach all nations baptizing them in the name of the Father and of the Son and of the Holy Ghost. Teaching them to observe all things whatsoever I have commanded you: and, lo I am with you alway even onto the end of the world, Amen'", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "C Gang was created in 2014 when Cypaq was in high school with its first release being 'Intro' by Mad For Christ (MFC) which was a collection of artists Snek.B, Dapsi & Cypaq. MFC later broke apart which later led to the creation of Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "The first official release under Christian Gang was 'What They Can't' by Snek.B & Cypaq which was recieved well by the masses. Christian Gang was later home to artists such as Donaj, Bravol Forlany,Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Years later after a lot of succesful releases and projects some artists went onto their own paths which would see Christian Gang become home to just one artist (Cypaq) and one act (Snek.B & Cypaq)."));
};

var BioDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject9());
var BioText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject10());

var Social = function Social() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SocialDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.instagram.com/cypaq/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaInstagram"], {
    color: '#D500F9',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCb-sjS_Agdipf3pBA1prI7A",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaYoutube"], {
    color: 'crimson',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://twitter.com/thecypaq",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTwitter"], {
    color: '#1976D2',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.facebook.com/cypaq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaFacebook"], {
    color: '#303F9F',
    className: "social-icon"
  })));
};

var SocialDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject11());

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileMusic; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: bold;\n  color: #424242;\n  margin-left: 15px;\n  margin-right: 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 90%;\n  height: 50vh;\n  background-image: url(", ");\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  .music-icon {\n    width: 50px;\n    height: 50px;\n    color: #424242;\n  }\n\n  a:link, a:visited{\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function MobileMusic() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MusicDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://open.spotify.com/artist/0qtXMXS8YFH0brVOrfnUqb",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSpotify"], {
    className: "music-icon",
    color: '#43A047'
  }), "Spotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://soundcloud.com/cypaq",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSoundcloud"], {
    className: "music-icon",
    color: '#FF3D00'
  }), "Soundcloud")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://itunes.apple.com/us/artist/cypaq/id1222975035",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaApple"], {
    className: "music-icon",
    color: 'gray'
  }), "MUSIC")));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
var MusicDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var MusicIconDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var IconDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileVideo; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 80%;\n  height: 80vh;\n  background-image: url(", ");\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  padding-top: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  iframe {\n    width: 100%;\n    height: 40vh\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function MobileVideo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/6ibNFeRNF7I",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/ngodNAE3P1k",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/ngMJbTTYYmU",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/zObTOW4ezAg",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/LAxgnEYfqrk",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/OWdkA-M09P4",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/i8IodlKEmVw",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoTile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/VzpclTcDevE",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })));
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
var VideoDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var VideoTile = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileAbout; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);



function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  font-size: 16px;\n  color: #000\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin-top: 15vh;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 80px;\n  height: 80px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  border: none;\n  text-decoration: none;\n  opacity: 0.6;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: flex;\n  overflow-x: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  height: 300px;\n  width: 350px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  button: hover {\n    opacity: 1\n  }\n\n  button: focus {\n    opacity: 1\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  height: 80vh;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-image: url(", ");\n  padding: 20px;\n  flex-direction: column\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var window = __webpack_require__(14);

var document = __webpack_require__(15);


function MobileAbout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    fluid: true,
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "about-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xl: 5,
    md: 7,
    lg: 7,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AboutDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitch, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bio, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Social, null)))));
}
var AboutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);

var ImageSwitch = function ImageSwitch() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('cyril.jpg'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(document.body.clientWidth),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      windowWidth = _useState6[0],
      setWidth = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('resize', setWidth(document.body.clientWidth));
    return window.removeEventListener('resize', setWidth(document.body.clientWidth));
  });

  function switchImage(item) {
    setImage(item);

    switch (item) {
      case 'cynchain.jpg':
        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'cyril.jpg':
        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'doc.JPG':
        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      case 'cynmic2':
        if (windowWidth < 740) {
          setSize(mobileLong);
        } else {
          setSize(long);
        }

        break;

      case 'cypurple':
        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      default:
        break;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "switchContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MainImage, {
    src: __webpack_require__(20)("./".concat(image)),
    style: size
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitchDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('cynchain.jpg');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(16)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('cyril.jpg');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(21)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('doc.JPG');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(22),
    className: "wide"
  })))));
};

var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject2());
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject4());
var ImageSwitchDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var SwitchRow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6());
var SwitchButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject7());
var SwitchImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject8());

var Bio = function Bio() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioText, null, "Christian Gang is a collection of creatives and a possible movement that stands for the freedom of creation of art with christian boundaries.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Christian Gang stands on the bible verse Matthew 28:19-20; which says 'Go ye therefore and teach all nations baptizing them in the name of the Father and of the Son and of the Holy Ghost. Teaching them to observe all things whatsoever I have commanded you: and, lo I am with you alway even onto the end of the world, Amen'", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "C Gang was created in 2014 when Cypaq was in high school with its first release being 'Intro' by Mad For Christ (MFC) which was a collection of artists Snek.B, Dapsi & Cypaq. MFC later broke apart which later led to the creation of Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "The first official release under Christian Gang was 'What They Can't' by Snek.B & Cypaq which was recieved well by the masses. Christian Gang was later home to artists such as Donaj, Bravol Forlany,Snek.B & Cypaq.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Years later after a lot of succesful releases and projects some artists went onto their own paths which would see Christian Gang become home to just one artist (Cypaq) and one act (Snek.B & Cypaq)."));
};

var BioDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject9());
var BioText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject10());

var Social = function Social() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SocialDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.instagram.com/cypaq/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
    color: '#D500F9',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCb-sjS_Agdipf3pBA1prI7A",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaYoutube"], {
    color: 'crimson',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://twitter.com/thecypaq",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
    color: '#1976D2',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.facebook.com/cypaq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebook"], {
    color: '#303F9F',
    className: "social-icon"
  })));
};

var SocialDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject11());

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileArtists; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);



function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 16px;\n  color: #000\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 15vh;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 80px;\n  height: 80px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  border: none;\n  text-decoration: none;\n  opacity: 0.6;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: flex;\n  overflow-x: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 300px;\n  width: 350px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  button: hover {\n    opacity: 1\n  }\n\n  button: focus {\n    opacity: 1\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 80vh;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-image: url(", ");\n  padding: 20px;\n  flex-direction: column\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var window = __webpack_require__(14);

var document = __webpack_require__(15);

function MobileArtists() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('cyril.jpg'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(document.body.clientWidth),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      windowWidth = _useState6[0],
      setWidth = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('cypaq'),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      bio = _useState8[0],
      toggleBio = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('resize', setWidth(document.body.clientWidth));
    return window.removeEventListener('resize', setWidth(document.body.clientWidth));
  });

  function switchImage(item) {
    setImage(item);

    switch (item) {
      case 'cynchain.jpg':
        toggleBio('cypaq');

        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'cyril.jpg':
        if (windowWidth < 740) {
          setSize(mobileDefault);
        } else {
          setSize({});
        }

        break;

      case 'doc.JPG':
        toggleBio('doc');

        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      case 'cynmic2':
        if (windowWidth < 740) {
          setSize(mobileLong);
        } else {
          setSize(long);
        }

        break;

      case 'cypurple':
        if (windowWidth < 740) {
          setSize(mobileWide);
        } else {
          setSize(wide);
        }

        break;

      default:
        break;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "about-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xl: 5,
    md: 7,
    lg: 7,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AboutDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitch, {
    switchImage: switchImage,
    image: image,
    size: size
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bio, {
    bio: bio
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Social, null)))));
}
var AboutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), _assets_images_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);

var ImageSwitch = function ImageSwitch(_ref) {
  var switchImage = _ref.switchImage,
      image = _ref.image,
      size = _ref.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "switchContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MainImage, {
    src: __webpack_require__(20)("./".concat(image)),
    style: size
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageSwitchDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('cynchain.jpg');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(16)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchButton, {
    onClick: function onClick() {
      return switchImage('doc.JPG');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchImage, {
    src: __webpack_require__(22),
    className: "wide"
  })))));
};

var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject2());
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject4());
var ImageSwitchDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var SwitchRow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6());
var SwitchButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject7());
var SwitchImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject8());

var Bio = function Bio(_ref2) {
  var bio = _ref2.bio;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioDiv, null, bio === 'cypaq' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioText, null, "Cyril Quansah aka Cypaq is a hip hop artist dedicated to the experimentation of music and freedom to create.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Cypaq's music career started off in 2014 after performing in high school to a bunch of friends in his school's dining hall, dominantly known as a rapper at that time.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Cypaq's first releases were duo singles with mate Snek.B which were 'What They Can't' and '3 Rounds' which were released in 2016.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "In 2017 Cypaq went on to release his first solo single 'Another Hope Song' which paved the way to create the type of artist he is today, 2017 also saw two more singles from Cypaq 'Over Do It' and 'Cold', the latter which went on to have about 10,000 streams across all platforms.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Cypaq has performed twice at one of Ghana's most famous venues namely; The National Theatre. 2018 is seen as a very dominant year for Cypaq because he released a total of 14 songs that year with 6 of them being singles and the rest being in his 'Green' album.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Green was released on 6th October 2018 and charted in the Apple music Top 200 album Charts and went on to be streamed a total of about 76,000 on just Soundcloud, Apple Music, Spotify and Youtube."), bio === 'doc' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioText, null, "Doc. Skill is a producer, writer, engineer and an artist who started making music as far back as 2015. He has produced songs for various artists in Ghana and has even worked with rapper Kiddfresh.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Doc. Skill joined C-Gang in August of 2019 and released his first single under CGang 'Phases' which went to have and overrall of about 5,000 streams accross all platforms. He later released a combined single with Cypaq titled Dreams"));
};

var BioDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject9());
var BioText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject10());

var Social = function Social() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SocialDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.instagram.com/cypaq/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaInstagram"], {
    color: '#D500F9',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCb-sjS_Agdipf3pBA1prI7A",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaYoutube"], {
    color: 'crimson',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://twitter.com/thecypaq",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTwitter"], {
    color: '#1976D2',
    className: "social-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.facebook.com/cypaq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebook"], {
    color: '#303F9F',
    className: "social-icon"
  })));
};

var SocialDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject11());

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(17);

var _router = __webpack_require__(19);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var _Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AntonRegular_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var _AntonRegular_woff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AntonRegular_woff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AntonRegular_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var _AntonRegular_woff2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AntonRegular_woff2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LacquerRegular_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);
/* harmony import */ var _LacquerRegular_woff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_LacquerRegular_woff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LacquerRegular_woff2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68);
/* harmony import */ var _LacquerRegular_woff2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LacquerRegular_woff2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Tomorrow_Regular_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69);
/* harmony import */ var _Tomorrow_Regular_woff__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Tomorrow_Regular_woff__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Tomorrow_Regular_woff2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70);
/* harmony import */ var _Tomorrow_Regular_woff2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Tomorrow_Regular_woff2__WEBPACK_IMPORTED_MODULE_9__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    @font-face {\n        font-family: 'Roboto';\n        src: local('Roboto'), local('sans-serif'),\n        url(", ") format('woff2'),\n        url(", ") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'Anton';\n        src: local('Anton'), local('sans-serif'),\n        url(", ") format('woff2'),\n        url(", ") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'Lacquer';\n        src: local('Lacquer'), local('sans-serif'),\n        url(", ") format('woff2'),\n        url(", ") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'Tomorrow';\n        src: local('Tomorrow'), local('sans-serif'),\n        url(", ") format('woff2'),\n        url(", ") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










/* harmony default export */ __webpack_exports__["a"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), _Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_3___default.a, _Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_2___default.a, _AntonRegular_woff2__WEBPACK_IMPORTED_MODULE_5___default.a, _AntonRegular_woff__WEBPACK_IMPORTED_MODULE_4___default.a, _LacquerRegular_woff2__WEBPACK_IMPORTED_MODULE_7___default.a, _LacquerRegular_woff__WEBPACK_IMPORTED_MODULE_6___default.a, _Tomorrow_Regular_woff2__WEBPACK_IMPORTED_MODULE_9___default.a, _Tomorrow_Regular_woff__WEBPACK_IMPORTED_MODULE_8___default.a));

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e73a9e3c6f7e3e1681951618a71bcd2c.woff";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8fa8a82f0969cd7d7027c1171ca08061.woff2";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c80dae8af99b4ca3cf8dc01b09ab504e.woff";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "867179ce5b237becdb97cfe38baca066.woff2";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41f8b86122deaaec68a6877538105b01.woff";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ef456ad45d81920711ccaa5b702cf0e.woff2";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7c5d3cd262174b1619368ebd09029c7.woff";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ebb51d0247fbebed9d7ef36e6a979d8.woff2";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
__webpack_require__(74);
module.exports = __webpack_require__(80);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(38)["default"];

var _require = __webpack_require__(39),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/applejeewce/react-projects/cgangV2/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(38)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(39),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(40),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/applejeewce/react-projects/cgangV2/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(40),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(28);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 13,
	"./": 13,
	"./index": 13,
	"./index.js": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 76;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(27);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(41);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(42);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(81);

var _interopRequireDefault = __webpack_require__(82);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(83));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(84));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(85);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(86)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("/Users/applejeewce/react-projects/cgangV2/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(87)(module)))

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5a57df53a056f740ac8de165936e17d9.jpg";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAQDAwQDAwQEAwQFBAQFBgoHBgYGBg0JCggKDw0QEA8NDw4RExgUERIXEg4PFRwVFxkZGxsbEBQdHx0aHxgaGxr/2wBDAQQFBQYFBgwHBwwaEQ8RGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhr/wAARCAMgAyADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEI/8QAHxABAAIDAAMAAwAAAAAAAAAAAAFBETFxIVFhgaGx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAURQAAAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL8rABsE2BagAACSoAAAAAAAAAAAAAAAAZAEz8UEhTCYBRIUAAAAAAAAAAAAAAAAAAAAAABNLkBOqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAIoAAAJBYLAAAAAAAAAAEgAAAJ5FBFyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJpSdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFiQoAAAHABFBNqgCiQsAAgHVTSzIAAAhH0FAAQALU9AAi4BI2pAAIAoWAAdBFQBQ0AAkSCiWoJlRLBQAAAAAE+rKAoAAigCAKCeQVMigAAAgKJ+1AAADICZU4gKAAAAAAAAAAAAAAAAAAAAAASAFCKAm1TYHFAEsktQAAShdAGwABDoGfQKBooAQ/pxQAAENqABYEBYAlKUCBxcAQm1QFRQCQMAiibBTAAFlpILxLFAAAAAtLVAUT5C6BJWQASFkARQAAEFT2CgAEaEsCFJTALhCgA6qQBagAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAADAAAAAAAABgAAAAAAAAAAAMGAAAAAAAAAAAAAAAAAAMAAhtQAAEwoAAAAAAAAAAAAAJZoFEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJVAWgTYKAAAAAAAAAAAAAAkqAIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigIoAAAAAAAAAAAAAAAJxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53b3744659456547075b2b417982beb9.jpg";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "418578096f973e3ffbc0df5a636a56ba.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44bc2f66fdc28714e802d8d6c573a307.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9549439d64d60039b954022e76fa5b12.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5196326c840cf7d976ae65aa94f93040.jpg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "708862744fd221f1f0aff07fb6477937.jpg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5636730b5fc724797ec6641eb2439912.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a2cd95967636b36ad60e6ad17803b73.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "150be7c4add712d8b4e54b8e44d34566.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAEa0lEQVR4Ae3bA5DlShTG8TP2s23btm3btm2V1mbx2SpjbePO2raV/zO6c2eCE21VfmVcnNRJ0vhacrlcLpeLDvtyDc/Qiu8ZwHjmspG1zKPAAL6nFc9wDftKFlHPLXRhGn5MpSs30SBZwZG0YxVBraADh0u6qOAm+qLRl5upkDSwNa8zjyjM5g22liRRwt0sIkoLuIcSSQYHM4A4DOBgiR/XsJq4rOYyiROlvIuX9fSmE09zMUezO9XUsBtHcQlP05HerMfLe7G1EtX8QHMaeZuzqfL4jrN4m0aa8wPVEj22YRBNWcqHHCEBcDgfsZSmDGIbiRb7MJHipvE4tRICdTzGdIqbyD4SHXZmOsU4tKdOOQRpT3HT2SW65mmkmJmcIxHgHKZTTIFtRY9qhlLMV2whEWFLPqOYYVSKFq1xc3hMIsYTOLi1Eh3Ow83hDokB9+DgdoGEx7YswO1+iQkP4Daf7SQseuL2osSIl3DrKeFwMm6tJWa0xO0UCY5yxmP7lZIEhuo/YxtPhQTFw9gaqU9ofl3A9nDw6z8Vk+NvtEN3akSJo3AwTaFcguAubJ3EF2CkfrJOZ2x3ShCu/l/Gdr4LgNXcJSpszzJMBfGPM7C9JT7xN20r8Ra2M8I//1ewVeAClK3EVqwI+T6gjrWYPhHf+Ju+lfgE0xqfQ3euxbZP8AL0rcR+2K4NN/4cJgFgU7QSw0KNAxiF6QVVAYpW4nlMo/zNv2xHqApQtBJHYNtGvHAupiUSCDZVK7EY07nihUcwfakuQNFKfIHpkeDD2bfUBShaibcwtRQv/IrpFnUBilbiFky/ihdGYjpeXYCilTjeLl68MBXT3uoCFK3E3pimBr/vt1MXoGgltse0WLzgYKpWF6BoJaoxbRIvrMNUmWoBlZjWiRcWZqqFtsO0ULwwJdM38ZTgj9ETMv8Y9XiR3Zrqi+xWTL+IF1pheifVocS7wYcSj2V6MPeoeOGCTA2nl2A6X7zQkOkJTb14YwSm51ObUj6HaYT4QStMg1Ob1A/B1GrzWlbZJ+yySh1rMH2cysLWx5jWUif+0COTS4vdxS9Ox/Z24ou772A7Xbe8vnWiy+tbsRRTQbvB0THRDY6O2O4KusU0C5PDUYltMR2Bg2k25RIMj2ErJLbJ14jt0TCZ0PHYfqZUYkYpv2IbT7kExym4tZGY0Qa3k6OMGrwkMeJlVdTAxnbMTzTscR9uC9hOwuMC3BzukRhwPw5u58UTeHpCIsZjEEu4hGqGxB4524KvKGYI1aLHthQoZiZnSwQ4m5neoT8VdmkydtlOHbtsG0vs0sZezQRfHw0ZfK3lkWaCr3tlO3p8ROzRYzeq+Z7mTOQdz/B3DWfzLhNpzvdUxxcHew8v6+lDJ575O35fSw27/x2/70QfffxejStZlf4BCBUOpg9x6MPBkgxKuCv6Q0CSLLbmjfSPYSlRwS30Q6Mvt1Ih6eJIOrBSdRQxfTRws+IwaHawv+s47jrmUWBgHMdxc7lcLpf7DUbdm275nPcAAAAAAElFTkSuQmCC"

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1475ecfb94f84e9526cc048f2b61252c.jpg";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2c63f552d64058764134466669fa6d7.jpg";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

/***/ })
/******/ ]);
});