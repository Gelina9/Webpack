require ("@babel/plugin-transform-runtime/regenerator")
require("./main.css")
require("./index.html")
var a = () => {
    console.log("hekko uhoihiuw")
}
a();
var b = async args => {
    const {a, b} = args;
    await console.log("hello",a,b);
    console.log(2);
}

b({a:1,b:2});