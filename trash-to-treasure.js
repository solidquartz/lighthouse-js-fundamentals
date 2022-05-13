//creates a smart trash can that automatically sorts trash into waste,
//recycling, or compost depending on what is submitted

//trash is a STRING that tells the function the type of item is being submitted
//bin is an OBJECT containing 3 properties (waste, recycling, compost)
//that have numerical value

//function
const smartGarbage = (trash, bins) => {
  //increases the correct value in the bins object and returns updated object
  if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
  return bins;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
/*prints 
{ 
  waste: 4,
  recycling: 3,
  compost: 5
} */
