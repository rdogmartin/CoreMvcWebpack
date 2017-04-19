"use strict";
require("../vendor");
require("./styles.less");
require("./less.min.js");
require("../favicon.ico");
console.log('Hello CoreMvcWebpack');
if (module['hot']) {
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
