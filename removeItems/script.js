"use strict";

const itemsArray = [1, 4, 3, 4, 4, 6, 7, 8, 9];

const removeItems = (array, item) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  //or
  // let newArray = array.filter((element) => element !== item);
  // array = newArray;

  return array.length;
};

console.log(itemsArray.length, itemsArray);

console.log(removeItems(itemsArray, 4), itemsArray);
