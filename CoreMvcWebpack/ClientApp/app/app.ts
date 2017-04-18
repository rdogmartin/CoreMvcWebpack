import '../vendor';

console.log('Hello CoreMvcWebpack');

if (module['hot']) {
    module['hot'].accept();
}

var message = () => "Hello RDOG. Wassup?";
//debugger;
document.getElementById("subtitle").innerHTML = message.apply(this);  

$(document).ready(function () {
    if (jQuery) {
        console.log('jQuery is loaded and available.');
    } else {
        console.log('jQuery is NOT loaded.');
    }
});