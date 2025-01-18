"use strict";


// Existing code provided
const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];


function returnTheRemainder(a, b) {
    return a % b;
}


function checkIfEven(number) {
    return number % 2 === 0;
}


function getTheFourthElement(arr) {
    return arr[3]; 
}


submissionBtn.addEventListener("click", () => {
   
    const num1 = 17;
    const num2 = 5;
    const remainder = returnTheRemainder(num1, num2);
    remainderElement.textContent = `The remainder of ${num1} divided by ${num2} is ${remainder}.`;

   
    const testNumber = 16;
    const isEven = checkIfEven(testNumber);
    checkIfEvenElement.textContent = `The number ${testNumber} is ${isEven ? "even" : "odd"}.`;

   
    const fourthElement = getTheFourthElement(lostNumbers);
    lostNumbersElement.textContent = `The fourth element of lostNumbers is ${fourthElement}.`;
});
