/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

function randomNumberFunction() {
    'use strict';
    let userInput = document.getElementById("userInput");
    let userInputInterchange = userInput.value;
    let userInputRemoveAllWhitespace = userInputInterchange.replace(/\s+/g, "");
    let userInputIsNotNumber = userInputRemoveAllWhitespace.replace(/[^0-9]/g);
    let minimumNumber = 1;
    let maximumNumber = 10;

    // userInput = undefined;
    // userInput = null;
    // userInput.value = "";
    // userInput.value = "A Whitespace B";

    if (userInput === undefined) { // Check if the input field is undefined.
        document.getElementById("output").innerText = "The input field is undefined";
        console.log("userInput is undefined");
    }

    else if (userInput === null) { // Check if the input field is null.
        document.getElementById("output").innerText = "The input field is null";
        console.log("userInput is null");
    }

    else if (userInputInterchange === "") { // Check if the input field is empty.
        document.getElementById("output").innerText = "Field can not be blank: " + "\" \"";
        console.log("input field is empty string");
    }

    else if (userInputInterchange !== userInputRemoveAllWhitespace) { // Check and remove all whitespaces.
        document.getElementById("output").innerText = "The input can not have whitespaces: " + userInputInterchange;
        console.log("input field have whitespaces");
    }

    else if (userInputIsNotNumber !== userInputRemoveAllWhitespace) { // Check only input of numbers.
        document.getElementById("output").innerText = "The input can only have numbers: " + userInputRemoveAllWhitespace;
        console.log("input field can only have numbers");
    }

    else if (userInputRemoveAllWhitespace < minimumNumber) { // Check if input number is greater than minimum number.
        document.getElementById("output").innerText = "The input number have to be greater than: " + minimumNumber;
        console.log("input field have to be greater");
    }

    else if (userInputRemoveAllWhitespace > maximumNumber) { // Check if input number is lesser than maximum number.
        document.getElementById("output").innerText = "The input number have to be less than: " + maximumNumber;
        console.log("input field have to be lesser");
    }

    else if (userInputInterchange === userInputRemoveAllWhitespace) { // Check and input value is valid.
        document.getElementById("output").innerText = "The input is valid: " + userInputRemoveAllWhitespace;
        console.log("input field is valid");
    }

    else {
        document.getElementById("output").innerText = "else";
        console.log("else");
        console.log("userInput: " + userInput);
        console.log("userInput.value: " + userInput.value);
        console.log("userInputInterchange: " + userInputInterchange);
        console.log("userInputRemoveAllWhitespace: " + userInputRemoveAllWhitespace);
    }

    // document.getElementById("output").innerText = "The input value is: " + userInput.value;
    // console.log("userInput.value: " + userInput.value);
}

document.getElementById("enterButton").addEventListener("click", randomNumberFunction);
