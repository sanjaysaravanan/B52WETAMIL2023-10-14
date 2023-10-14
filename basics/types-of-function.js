// Normal Function using function keyword
function funcOne(arg1, arg2) {
  console.log("Inside FuncOne", arg1, arg2);
  return 999;
}
funcOne(1, 2);
// anonymous function ( it has no name )
// this anonymous cannot be called as such
// function (arg1, arg2) {
//   console.log("Inside FuncTwo");
//   return 999;
// }

// function as a value to a varaible
// keeping a name to the above anonymous function
const funcTwo = function (arg1, arg2) {
  console.log("Inside FuncTwo", arg1, arg2);
  return 999;
};

funcTwo(1, 2);

// Arrow function --> a function defined using a arrow syntax( => )
// without using the keyword function
const funcArrowOne = () => {
  console.log("Inside Arrow Function");
  return 999;
};

funcArrowOne();

const funcArrow = (arg1, arg2) => {
  console.log("Inside Arrow Function", arg1, arg2);
  return 999;
};

funcArrow(1, 2);

// IIFE --> Immediately Invoked Function Expression
(function (arg1, arg2) {
  console.log("IIFE with function keyword", arg1, arg2);
})(1, 2);

(() => {
  console.log("IIFE with arrow syntax");
})();
