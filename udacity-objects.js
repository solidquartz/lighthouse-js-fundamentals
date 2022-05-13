//object containing arrays of keys and values
//note the curly braces
let donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

//note that the parameter, "donut", could actually be anything.
//this code still works the same if you replace "donut" with "pizza"
//computers aren't very smart and don't actually know English
donuts.forEach(function (donut) {
  console.log(`${donut.type} donuts cost $${donut.cost} each`);
});


//facebook profile. practice manipulating objects.
//all of the methods are inside the object itself
//the methods are called by their method keys
let facebookProfile = {
  name: "Aky",
  friends: 27,
  messages: ["hi", "forreal", "lol", "bubble tea"],
  //method that adds a message
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  //method that deletes a message at the indicated index
  //and removes the number of messages indicated by the second parameter
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  //increases friend count by 1
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  //decreases friend count by 1
  removeFriend: function () {
    facebookProfile.friends -= 1;
  },
};

//this is how you call an object method 
facebookProfile.postMessage("yabai");
console.log(facebookProfile.messages); //prints array including "yabai"