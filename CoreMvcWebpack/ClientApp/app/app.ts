import '../vendor';
import './styles.less';
import './less.min.js';
import '../favicon.ico';

console.log('Hello CoreMvcWebpack');

if (module['hot']) {
    module['hot'].accept();
}

var message = () => "This text was dynamically inserted via JS.";
//debugger;
document.getElementById("subtitle").innerHTML = message.apply(this);  

$(document).ready(function () {
    if (jQuery) {
        console.log('jQuery is loaded and available.');
    } else {
        console.log('jQuery is NOT loaded.');
    }
});