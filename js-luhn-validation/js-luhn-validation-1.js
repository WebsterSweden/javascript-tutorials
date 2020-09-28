/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

function luhnCheckFunctionOne() {
    'use strict';
    var luhnInputOneValue = document.getElementById("luhnInputOne").value;
    console.log("luhnInputOneValue: " + luhnInputOneValue);
    var luhnInputOneValueParseInt = parseInt(luhnInputOneValue, 10);
    if (isNaN(luhnInputOneValueParseInt)) {
        console.log("The input is not a number: " + luhnInputOneValue);
    } else {
        console.log("The input is a number: " + luhnInputOneValue);
    }
}

document.getElementById("luhnInputButton").addEventListener("click", luhnCheckFunctionOne);

// TODO: How to use function argument and parameter when addEventListener and input value is used.
