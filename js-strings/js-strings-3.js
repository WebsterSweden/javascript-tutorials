/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

let stringOne = "The quick brown fox jumps over the lazy dog";

let arrayOne = ["The quick brown fox jumps over the lazy dog"];

let arrayOneSplit = stringOne.split("");

let arrayOneJoin = arrayOneSplit.join("");

let arrayOneSplitJoin = stringOne.split("").join("");

let arrayOneSplitReverseJoin = stringOne.split("").reverse().join("");

// let arrayOneShift = stringOne.split("").shift();
let arrayOneShift = arrayOneSplit.shift();

// let arrayOnePop = stringOne.split("").pop();
let arrayOnePop = arrayOneSplit.pop();

let arrayTwo = ["A", "B", "C", "D", "E", "F"];

console.log(arrayTwo);

console.log(arrayTwo.length);

let i;

(function () {
    'use strict';
    for (i = 1; i <= stringOne.length; i += 1) {
        document.getElementById("stringOneOutput").innerHTML += i + "<br>";
    }
}());

(function () {
    'use strict';
    document.getElementById("stringOneOutput").innerHTML = stringOne;
    document.getElementById("arrayOne").innerHTML = arrayOne;
    document.getElementById("arrayOneSplit").innerHTML = arrayOneSplit;
    document.getElementById("arrayOneJoin").innerHTML = arrayOneJoin;
    document.getElementById("arrayOneSplitJoin").innerHTML = arrayOneSplitJoin;
    document.getElementById("arrayOneSplitReverseJoin").innerHTML = arrayOneSplitReverseJoin;
    document.getElementById('arrayOneShift').innerHTML = arrayOneShift;
    document.getElementById("arrayOnePop").innerHTML = arrayOnePop;
    document.getElementById("arrayOneResult").innerHTML = arrayOneSplit.join("");
}());
