
console.log(test);
var test = 99;
console.log(test);

var test;
console.log(test);
test = 99;
console.log(test);

bla = 2;
console.log(bla);
var bla;
console.log(bla);

// let hoisting
console.log(test);
let test = 100;
console.log(test);

let test;
console.log(test);
test = 100;
console.log(test);

// const hositing
console.log(test);
const test = 100;
console.log(test);

const test;
console.log(test);
test = 100;
console.log(test);


// Functions is also will be hoisted with proper value
var test = 100;
funcOne();
function funcOne() {
  console.log('Testing the Function');
}

function funcTwo() {
  console.log(test);
  var test = 199;
  console.log(test);
}

funcTwo();
