/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

function animateStringOneFunction() {
    'use strict';

    let animateStringOneInput = document.getElementById("animateStringOneInput").innerText;
    let animateStringOneOutput = document.getElementById("animateStringOneOutput");
    animateStringOneOutput.innerText = animateStringOneInput;
    let animateArrayOneSplit = animateStringOneInput.split("");
    document.getElementById("animateArrayOneSplit").innerText = animateArrayOneSplit;
    let animateArrayOneReverse = animateArrayOneSplit.reverse();
    document.getElementById("animateArrayOneReverse").innerText = animateArrayOneReverse;
    let animateArrayOneLastElement = animateArrayOneReverse.pop();
    document.getElementById("animateArrayOneLastElement").innerText = animateArrayOneLastElement;
    let animateArrayOneFirstElement = animateArrayOneReverse.shift();
    document.getElementById("animateArrayOneFirstElement").innerText = animateArrayOneFirstElement;
    let animateArrayOneJoin = animateArrayOneReverse.join("");
    document.getElementById("animateArrayOneJoin").innerText = animateArrayOneJoin;
    let animateArrayOneConcat = animateArrayOneFirstElement.concat(animateArrayOneJoin, animateArrayOneLastElement);
    document.getElementById("animateArrayOneConcat").innerText = animateArrayOneConcat;
}

document.getElementById("animateStringOneButton").addEventListener("click", animateStringOneFunction);
