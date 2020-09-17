/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

let userInput = document.getElementById("userInput").value;

function randomNumberFunction() {
    'use strict';

    if (userInput === "") { // Check if the field is empty.
        console.log("userInput is empty");
        document.getElementById("output").innerText = "Field can not be blank";
    }

}

document.getElementById("enterButton").addEventListener("click", randomNumberFunction);
