//parade route
const moves = ["north", "north", "west", "west", "north", "east", "north"];

/*calculates the positions of the parade 
based on an array of directional moves on X-Y grid*/
const finalPosition = function (moves) {
  //axis positions on the grid
  let x = 0;
  let y = 0;

  //translates cardinal directions to movement on the grid
  for (let move of moves) {
    if (move === "north") {
      y += 1;
    } else if (move === "east") {
      x += 1;
    } else if (move === "south") {
      y -= 1;
    } else if (move === "west") {
      x -= 1;
    }
  }
  return [x, y];
};

//function call
console.log(finalPosition(moves));
