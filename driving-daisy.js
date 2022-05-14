//tracks the speed at which a given car is traveling at a given time
//takes in an array of car objects & the speed of a car as it passes a sensor
//car is an object and speed is a number.
//it returns an array of objects

const carPassing = (cars, speed) => {
  cars.push( { time: Date.now(), speed: speed } );
  return cars;
};

//existing array
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

//calls function
const speed = 38;

console.log(carPassing(cars, speed));
