const h = 99;
h = 100;

let x = 99;
let y = 88;

function twist(a, b) {
  console.log("Inside Twist Execution");
  a = 77;
  b = 66;
  console.log("a", a);
  console.log("b", b);
}

console.log("Before Twist Execution");
console.log("x", x);
console.log("y", y);

twist(x, y);

console.log("After Twist Execution");
console.log("x", x);
console.log("y", y);
