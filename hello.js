//example using console.log in body
const sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Aky");

//example using return
const returnSayHello = function (name) {
  return "Hello, " + name;
};

const greeting = returnSayHello("Aky");
console.log(greeting);
