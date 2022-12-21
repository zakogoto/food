'use strict';
function doSomething(a, b, ...rest) {
    console.log(a, b, rest);
}

doSomething('do', 'something' , 'else', 'bustard');