// Iteration of an array

const arr = ["sam", "mentor", "developer", "engineer"];

// for --> values are accessed only with index
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-of --> direct value access
for (let value of arr) {
  console.log(value);
}

// for-in --> direct access to indexes
for (let i in arr) {
  console.log("i", i);
  console.log(arr[i]);
}

// Iteration of Object
const obj = {
  name: "Sam",
  role: "Developer",
  dob: "dd-mm-yyyy",
  isIndian: true,
};

// O/P
// name --> sam
// role --> developer
// dob --> dd-mm-yyyy
// isIndian --> true

// Object.values / Object.keys --> return array of keys/value in an object
// can be used to iterate over both array and objects
for (let value of Object.values(obj)) {
  console.log(value);
}

for (let key of Object.keys(obj)) {
  console.log(key, "-->", obj[key]);
}

// using for-in --> direct access keys
for (let key in obj) {
  console.log(key);
}

for (let key in obj) {
  console.log(key, "-->", obj[key]); // name --> obj['name']
}
