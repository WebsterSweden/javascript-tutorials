/*jslint
browser, devel, es6, for
*/
/*global
window
*/

// bitwise, browser, convert, couch, devel, es6, eval, fudge, getset, long, node, single, this, white

console.log(document.currentScript);

(function () {
    'use strict';
    let stringOne = document.getElementById("stringOneInput").innerHTML;
    console.log(stringOne);
    document.getElementById("stringOneOutput").innerHTML = stringOne + "<br>";

    let stringOneSplit = stringOne.split("");
    console.log(stringOneSplit);
    console.log(stringOneSplit.length);

    let arrayOne = [];
    console.log(arrayOne);
    console.log(arrayOne.length);
}());

console.log("----------");

(function () {
    'use strinct';
    let stringTwo = document.getElementById("stringTwoInput").innerHTML;
    let index;
    let stringTwoSplitOriginal = stringTwo.split("");
    let stringTwoSplit = stringTwo.split("");
    let stringTwoUnshift = [];
    let stringTwoConcat = [];

    for (index = stringTwo.length; index > 0; index -= 1) {
        let stringTwoPop = stringTwoSplit.pop();
        stringTwoUnshift.unshift(stringTwoPop);
        stringTwoConcat = stringTwoConcat.concat(stringTwoPop);
        console.log(index);
        document.getElementById("stringTwoOutput").innerHTML += index + "&nbsp;&nbsp;&nbsp;" + stringTwoSplitOriginal + "&nbsp;&nbsp;&nbsp;" + stringTwoUnshift + "&nbsp;&nbsp;&nbsp;" + stringTwoPop + "&nbsp;&nbsp;&nbsp;" + stringTwoSplit + "&nbsp;&nbsp;&nbsp;" + stringTwoConcat + "<br>";
    }
}());
