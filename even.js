//returns true if the number is even
const isEven = function (num) {
  return num % 2 === 0;
};

//set to the values of checking if 10 and 11 are even
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//avoids declaring new variables
console.log(isEven(10));
console.log(isEven(11));
