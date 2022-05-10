//array of stations
const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Center", 45, "community centre"],
  ["Codeville Epic Academy", 15, "school"],
  ["Big Al Pizza", 50, "restaurant"],
];

//good stations have at least 20 capacity
//stations can be schools OR community centres

//takes in array of voting stations and returns only appropriate stations
const chooseStations = function (stations) {
  //the array of appropriate stations is pushed here
  const goodStations = [];

  //goes through the array and selects stations with the correct capacity
  for (const station of stations) {
    const capacity = station[1];

    //from the stations with the correct capacity, finds the ones with the right type
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  //returns the goodStations array which was populated by the two conditionals
  return goodStations;
};

console.log(chooseStations(stations));
//prints Bright Lights Elementary and Moose Mountain Community Centre
