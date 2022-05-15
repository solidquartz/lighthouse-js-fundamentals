//returns the name of the submitter of the best vegetable for a given metric
const judgeVegetable = (vegetables, metric) => {
  //sorts the array from highest to lowest
  vegetables.sort((a, b) => {
    return b[metric] - a[metric];
  });
  //returns the name of the submitter of the highest scoring veg
  return vegetables[0].submitter;
};

//argument input
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

console.log(judgeVegetable(vegetables, metric));
