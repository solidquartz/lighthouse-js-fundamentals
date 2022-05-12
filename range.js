//creates an array based on a start, end, and multiple input
function range(start, end, step) {
  let rangeArray = [];
  //returns an empty array if the input is invalid
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  } else {
    //creates new array
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
