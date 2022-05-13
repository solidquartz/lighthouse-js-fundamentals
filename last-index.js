//returns the index no. of the last time the value occurs in the array
function lastIndexOf(array, value) {
  //loops backwards through array
  for (let i = array.length; i >= 0; i--) {
    //
    if (value === array[i]) {
      return i;
    }
  }
  //returns -1 if the value is not in the array
  //this is outside the loop, because if the value isn't the first
  //number checked in the loop, the loop will escape and return -1
  return -1;
}

//checks code functionality
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
