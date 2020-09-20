/*jslint
browser, devel, es6
*/
/*global
window
*/

// console.log(document.currentScript);

// Create a random number.
let minimumNumber = 1;
let maximumNumber = 10;

// Create turn counter.
let roundStart = 0;
let roundCurrent = roundStart;
let roundEnd;

let randomNumberGenerated;

// Minimum and maximum random numbers.
function randomNumberFunction() {
    'use strict';
    randomNumberGenerated = Math.floor(Math.random(minimumNumber) * (maximumNumber) + 1);
    // document.getElementById("minimumNumber").innerText = minimumNumber;
    // document.getElementById("maximumNumber").innerText = maximumNumber;
    document.getElementById("randomIntervalInfo").innerText = "Guess a number between " + minimumNumber + " - " + maximumNumber;
    document.getElementById("randomNumberOutput").innerText = randomNumberGenerated;
    console.log("randomNumberFunction: " + randomNumberGenerated);
}

document.getElementById("randomNumberCreate").addEventListener("click", randomNumberFunction);

// Check user input and validate the data.
function inputValidationFunction() {
    'use strict';
    let userInput = document.getElementById("userInput");
    let userInputInterchange = userInput.value;
    let userInputRemoveAllWhitespace = userInputInterchange.replace(/\s+/g, "");
    let userInputIsNotNumber = userInputRemoveAllWhitespace.replace(/[^0-9]/g);

    // userInput = undefined;
    // userInput = null;
    // userInput.value = "";
    // userInput.value = "A Whitespace B";

    if (userInput === undefined) { // Check if the input field is undefined.
        document.getElementById("output").innerText = "The input field is undefined";
        console.log("userInput is undefined");
    } else if (userInput === null) { // Check if the input field is null.
        document.getElementById("output").innerText = "The input field is null";
        console.log("userInput is null");
    } else if (userInputInterchange === "") { // Check if the input field is empty.
        document.getElementById("output").innerText = "Field can not be blank: " + "\" \"";
        console.log("input field is empty string");
    } else if (userInputInterchange !== userInputRemoveAllWhitespace) { // Check and remove all whitespaces.
        document.getElementById("output").innerText = "The input can not have whitespaces: " + userInputInterchange;
        console.log("input field have whitespaces");
    } else if (userInputIsNotNumber !== userInputRemoveAllWhitespace) { // Check only input of integers.
        document.getElementById("output").innerText = "The input can only have integers: " + userInputRemoveAllWhitespace;
        console.log("input field can only have integers");
    } else if (userInputRemoveAllWhitespace < minimumNumber) { // Check if input number is greater than minimum number.
        document.getElementById("output").innerText = "The input number " + userInputInterchange + " have to be greater than: " + minimumNumber;
        console.log("input field have to be greater");
    } else if (userInputRemoveAllWhitespace > maximumNumber) { // Check if input number is lesser than maximum number.
        document.getElementById("output").innerText = "The input number " + userInputInterchange + " have to be less than: " + maximumNumber;
        console.log("input field have to be lesser");
    } else if (parseInt(userInputRemoveAllWhitespace) === randomNumberGenerated) { // The guessed number is the same as the random generated number.
        document.getElementById("output").innerText = "Congratulations! The guessed number " + userInputRemoveAllWhitespace + " is correct.";
        console.log("The user guess is the same as the random generated number: " + randomNumberGenerated);
        console.log("randomNumberGenerated: " + randomNumberGenerated);
        console.log("userInputInterchange: " + userInputInterchange);
        console.log("userInputRemoveAllWhitespace: " + userInputRemoveAllWhitespace);
        roundCurrent = roundCurrent + 1;
        document.getElementById("randomNumber").innerText = "Total number of guesses: " + roundCurrent;
        console.log("roundCurrent: " + roundCurrent);
    } else if (parseInt(userInputRemoveAllWhitespace) < randomNumberGenerated) { // The guessed number is to low.
        document.getElementById("output").innerText = "The guessed number is to low";
        console.log("randomNumberGenerated: " + randomNumberGenerated);
        console.log("userInputRemoveAllWhitespace: " + userInputRemoveAllWhitespace);
        roundCurrent = roundCurrent + 1;
        document.getElementById("randomNumber").innerText = "Guess number: " + roundCurrent;
        console.log("roundCurrent: " + roundCurrent);
    } else if (parseInt(userInputRemoveAllWhitespace) > randomNumberGenerated) { // The guessed number is to high.
        document.getElementById("output").innerText = "The guessed number is to high";
        console.log("randomNumberGenerated: " + randomNumberGenerated);
        console.log("userInputRemoveAllWhitespace: " + userInputRemoveAllWhitespace);
        roundCurrent = roundCurrent + 1;
        document.getElementById("randomNumber").innerText = "Guess number: " + roundCurrent;
        console.log("roundCurrent: " + roundCurrent);
    } else {
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

document.getElementById("enterButton").addEventListener("click", inputValidationFunction);

// else if (userInputInterchange === userInputRemoveAllWhitespace) { // Check and input value is valid.
//     document.getElementById("output").innerText = "The input is valid: " + userInputRemoveAllWhitespace;
//     console.log("input field is valid");
//     console.log("randomNumberGenerated: " + randomNumberGenerated);
//     console.log("userInputRemoveAllWhitespace: " + userInputRemoveAllWhitespace);
//     roundCurrent = roundCurrent + 1;
//     document.getElementById("randomNumberVV").innerText = "Round number: " + roundCurrent;
//     console.log("roundCurrentVV: " + roundCurrent);
// }
