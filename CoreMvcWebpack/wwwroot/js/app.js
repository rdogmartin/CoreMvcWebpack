webpackJsonp([1],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {
exports.__esModule = true;
__webpack_require__(2);
console.log('Hello CoreMvcWebpack');
if (true) {
    module['hot'].accept();
}
var message = function () { return "Hello RDOG. Wassup?"; };
//debugger;
document.getElementById("subtitle").innerHTML = message.apply(this);
$(document).ready(function () {
    if (jQuery) {
        console.log('jQuery is loaded and available.');
    }
    else {
        console.log('jQuery is NOT loaded.');
    }
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ })

},[19]);
//# sourceMappingURL=app.js.map