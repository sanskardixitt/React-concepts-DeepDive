function square(num) {
  // function declaration
  return num * num;
}

const squareexp = function (num) {
  //function expression
  return num * num;
};

console.log(square(5));

// First class function , function that can be treated as variable that function  is known as first class function

function displaysquare(fn) {
  console.log("square is " + fn(5));
}

displaysquare(square);

// IIFE

(function square(num) {
  // function declaration
  console.log(num * num);
})(10);

//question

(function (x) {
  return (function (y) {
    console.log(x);
  })(5);
})(2);

//closures - ability of the function to acccess the function properties  is  lexically out of the scope .

//function are hoisted fully not as the variables .

functionName();

function functionName() {
  console.log(t);
  console.log("inside function");
}

var t = 5;

//params vs arguments

function area(num) {
  // params

  console.log(num);
}
area(4); //arguments

// rest vs spread

function mutliply(a, x, ...nums) {
  //rest operator , type is array here
  //rest operator should at the end of the params .
  console.log(nums); //[1, 2, 2, 5]
}

let arr = [1, 2, 2, 5, 5, 8, 8];

mutliply(...arr); // spread operator

//callback
/* is a function passed into another function as an arg , which is invoked inside the outer function to complete some routine */

// arroe function vs function()

/* implicit return in arrow func 

arguments keyword in normal function 

this behaviour in both is different  */

// FUNCTION Interview Questions

// Question 1 : Function Code

function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}
displaySquare(square);

// Question 2 :  What is IIFE?

// Eg-1
(function square(num) {
  console.log(num * num);
})(7);

// Eg-2
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Question 3 : Closure

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// Question 4 : Function Scope

// Q-1
var num1 = 20,
  num2 = 3,
  name = "Roadsidecoder";

function mul() {
  return num1 * num2;
}
mul();
function getScore() {
  var num1 = 3,
    num2 = 4;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
getScore();

// Q-2
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    // 3 times 5
    console.log(i);
  }, i * 1000);
}

// Question 5 : Function Hoisting

// Without Hoisting:
function functionName() {
  console.log("work at tech");
}

functionName(); // function is called after declaring it

// With Hoisting:
functionName(); // function is called before declaring it

function functionName() {
  console.log("work at tech");
}

// Output
var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};
fun();

// Question 6 :  Params vs arguments

/* const fn = (a, x, y, ...numbers) => {
    console.log(x, y)
};
fn(5,6,7,8);



// Question 7 : Spread operator and rest operator
function multiply(...nums){  // rest operator ,should always be the last one
    console.log(nums[0]*nums[1]);
}
var arr = [5,7];
multiply(...arr) // Spread operator



// Question 8 : Callback

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}
  
processUserInput(greeting);



// Question 9 : Arrow functions

const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const addNum = (firstNum, secondNum) => firstNum + secondNum;



// Question 10 : this

let user = {
    name: "Roadside Coder",
    rc1: () => {
      console.log("Subscribe to " + this.name);
    },
    rc2() {
      console.log("Subscribe to " + this.name);
    },
};


 */
