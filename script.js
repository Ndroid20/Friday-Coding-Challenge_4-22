"use strict";

const number = [1, 2, 3, 4, 5];
const string = ["Abe", "Ben", "Chris", "Derek", "Elisabeth"];
const truth = [true, false, true, false, false];

// const machine = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") continue;
//     console.log();
//   }
// };
const machine = function (arr) {
  if (string === typeof string) {
    return arr.push("string");
  } else if (number === typeof number) {
    return arr.push(1);
  } else if (truth === typeof truth) {
    return arr.push(false);
  }
};

machine(number);
