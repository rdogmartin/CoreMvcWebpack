console.log('Hello CoreWebpack');

if (module['hot']) {
    module['hot'].accept();
}
var message = () => "Hello RDOG. Wassup?";
//debugger;
document.getElementById("subtitle").innerHTML = message.apply(this);  