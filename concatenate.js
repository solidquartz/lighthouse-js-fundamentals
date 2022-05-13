//concatenates two arrays of scores from two researchers

function concat(array1, array2) {
  //loops through the second array and pushes it to the first
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  //the first array now contains both, so only it is returned
  return array1;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
