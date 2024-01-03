"use strict";

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const array3 = [1, 5, 2, 3, 0, 8, 2];
const array4 = [9, 8, 10, 2, 5, 6, 1];

function checkMonotonic(array) {
  let isDecreasing = true;
  let isIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isDecreasing = false;
    }
    if (array[i] > array[i - 1]) {
      isIncreasing = false;
    }
  }

  return isDecreasing || isIncreasing;
}

//Eziyyet
const arrayEl1 = document.getElementById("array-el1");
const arrayEl2 = document.getElementById("array-el2");
const arrayEl3 = document.getElementById("array-el3");
const arrayEl4 = document.getElementById("array-el4");
const condition1 = document.getElementById("condition-1");
const condition2 = document.getElementById("condition-2");
const condition3 = document.getElementById("condition-3");
const condition4 = document.getElementById("condition-4");

arrayEl1.textContent = `1) ${array1}`;
arrayEl2.textContent = `2) ${array2}`;
arrayEl3.textContent = `3) ${array3}`;
arrayEl4.textContent = `4) ${array4}`;

condition1.textContent = `isMonotonic: ${checkMonotonic(array1)}`;
condition2.textContent = `isMonotonic: ${checkMonotonic(array2)}`;
condition3.textContent = `isMonotonic: ${checkMonotonic(array3)}`;
condition4.textContent = `isMonotonic: ${checkMonotonic(array4)}`;
