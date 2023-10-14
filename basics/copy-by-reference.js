const obj = {
  name: "Sanjay",
  role: "Mentor",
};

console.log("Before Value Change");
console.log("name", obj.name);
console.log("role", obj.role);

obj.name = "Sam";
obj.role = "Student";

console.log("After Value Change");
console.log("name", obj.name);
console.log("role", obj.role);

// when we use reference the value will change

const bioData = {
  height: 180,
  weight: 90,
};

const arr = ["Sanjay", "Mentor"];

function update(info, details) {
  console.log("Inside Update");

  info.height = 160;
  info.weight = 75;

  details[0] = "Sam";
  details[1] = "Student";

  console.log("height", info.height);
  console.log("weight", info.weight);
  console.log("name", details[0]);
  console.log("role", details[1]);
}

console.log("Before Update");
console.log("height", bioData.height);
console.log("weight", bioData.weight);
console.log("name", arr[0]);
console.log("role", arr[1]);

update(bioData, arr);

console.log("After Update");
console.log("height", bioData.height);
console.log("weight", bioData.weight);
console.log("name", arr[0]);
console.log("role", arr[1]);
