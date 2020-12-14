/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

function clock() {
    'use strict';
    let dateObject = new Date();
    document.getElementById("clockOutput").innerText = dateObject.toLocaleTimeString();
}

(function () {
    'use strict';
    setInterval(clock, 1000);
}());

let stringOne = "abcdef";

function stringOneFunction() {
    'use strict';
    document.getElementById("stringOneOutput").innerHTML += stringOne + "<br>";
}

let stringOneVariable;

function stringOneSetInterval() {
    'use strict';
    stringOneFunction();
    stringOneVariable = setInterval(stringOneFunction, 1000);
}

document.getElementById("stringOneStart").addEventListener("click", stringOneSetInterval);

function stringOneClearInterval() {
    'use strict';
    clearInterval(stringOneVariable);
}

document.getElementById("stringOneStop").addEventListener("click", stringOneClearInterval);
