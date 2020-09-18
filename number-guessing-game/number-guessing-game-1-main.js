/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

let userInput = document.getElementById("userInput");

let userInputInterchange = userInput.value;
// userInputInterchange = null;

// let userInputRemoveAllWhitespace = userInput.value.replace(/\s+/g, "");
let userInputRemoveAllWhitespace = userInputInterchange.replace(/\s+/g, "");
// let userInputRemoveAllWhitespace;

// userInput = undefined;
// userInput = null;
// userInput.value = "";
// userInput.value = "A Whitespace B";

console.log("userInput: " + userInput);
console.log("userInput.value: " + userInput.value);
console.log("userInputInterchange: " + userInputInterchange);
console.log("userInputRemoveAllWhitespace: " + userInputRemoveAllWhitespace);

function randomNumberFunction() {
    'use strict';

    if (userInput === undefined) { // Check if the input field is undefined.
        document.getElementById("output").innerText = "The input field is undefined";
        console.log("unserInput is undefined");
    }

    else if (userInput === null) { // Check if the input field is null.
        document.getElementById("output").innerText = "The input field is null";
        console.log("userInput is null");
    }

    else if (userInput.value === "") { // Check if the input field is empty.
        document.getElementById("output").innerText = "Field can not be blank";
        console.log("input field is empty string");
    }

    else if (userInputInterchange !== userInputRemoveAllWhitespace) { // Check and remove all whitespaces.
        // TODO: The whitespace check need two click. Change to one click.
        userInputRemoveAllWhitespace = userInput.value.replace(/\s+/g, "");
        document.getElementById("output").innerText = "The input can not have whitespaces: " + userInputInterchange;
        console.log("input field have whitespaces");
        // userInputInterchange = userInput.value;
    }

    else if (userInputInterchange === userInputRemoveAllWhitespace) { // Check and input value is valid.
        userInputRemoveAllWhitespace = userInput.value.replace(/\s+/g, "");
        document.getElementById("output").innerText = "The input is valid: " + userInputRemoveAllWhitespace;
        console.log("userInput: " + userInput);
        console.log("userInput.value: " + userInput.value);
        userInputInterchange = userInput.value;
        console.log("userInputInterchange: " + userInputInterchange);
        console.log("userInputRemoveAllWhitespace: " + userInputRemoveAllWhitespace);
    }

}

document.getElementById("enterButton").addEventListener("click", randomNumberFunction);
