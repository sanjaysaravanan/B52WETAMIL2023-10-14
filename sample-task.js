// task print odd number in an array

// Anonymous
const printOdd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
};

printOdd([1, 2, 3, 4, 5, 6, 7, 8]);

// IIFE
(function (arr) {
  for (let i in arr) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8]);
