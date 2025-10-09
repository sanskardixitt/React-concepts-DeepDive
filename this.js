/* this refers to the object that is currently executing the function.
It’s a runtime binding — meaning its value is determined when the function is called, not when it’s defined. */

let user = {
  name: "sanskar",
  greet: function () {
    console.log(this.name);
  },
};
user.greet();

class userClass {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}
const User = new userClass("ram");

console.log(User.getName());

let calc = {
  read() {
    this.a = prompt("a = ", 0);
    this.b = prompt("b = ", 0);
  },
  sum() {
    return this.a + this.b();
  },
  multi() {
    return this.a * this * b;
  },
};

calc.read();
console.log(calc.multi);

// THIS KEYWORD

// Question 1 : this keyword

let a = 5;

console.log(this.a);

// Question 2 : this inside Method

let user6 = {
  name: "Piyush",
  age: 24,
  getDetails() {
    console.log(this.name);
  },
};

user6.getDetails();

// Question 3 : nested object

let user5 = {
  name: "Piyush",
  age: 24,
  childObj: {
    newName: "Roadside Coder",
    getDetails() {
      console.log(this.newName, "and", this.name);
    },
  },
};

user5.childObj.getDetails();

// Question 4 : Class & Constructor

class user4 {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const User4 = new user("Piyush");
User.getName();

// Question 5 : Output

const user4 = {
  firstName: "Piyush!",
  getName() {
    const firstName = "Piyush!";
    return this.firstName;
  },
};

console.log(object.getMessage());

// Question 6 : What is the result of accessing its `ref`? Why?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user3 = makeUser();

alert(user3.ref.name); // What's the result?

// Question 7 : What logs to console the following code snippet:

const user2 = {
  name: "Piyush Agarwa;!",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user2.logMessage, 1000);

// Question 8 : Output

const user1 = {
  name: "Piyush",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};
console.log(user1.greet());
console.log(user1.farewell());

// Question 9 :

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Question 10 : Output

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2);

// Question 11 : Implement this Code

const result = calcc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

// My Answer
var calcc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};
