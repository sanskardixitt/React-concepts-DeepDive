const user2 = {
  name: "sanskar",
  age: 7,
  "Name of the car": "maruti",
};
delete user2.age;

console.log(user2["Name of the car"]);

for (key in user2) {
  console.log(user2[key]);
}

const pro = "firstname";
const naam = "sanskar";

const user1 = {
  [pro]: naam,
};

console.log(user1);

const user5 = {
  radius: 5,
  diameter() {
    return this.radius;
  },

  permeter: () => 2 * Math.PI * this.radius,
};

console.log(user5.diameter());
console.log(user5.permeter());

const user3 = {
  name: "sanskar",
  address: {
    city: "kanpur",
  },
};

console.log(user3.address);

const {
  address: { city },
} = user3;

console.log(city);

// OBJECT Interview Questions

// Question 1 : Delete keyword in Object

const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func);

// Computed Properties

let property = "firstName";
let names = "Piyush Agarwal";

let persons = {
  [property]: names,
};

// Accessing
// alert(bag.firstName);
// alert(bag[property]);

// Looping in Object

let user6 = {
  name: "Piyush",
  age: 24,
};

for (let key in user6) {
  //   alert(key); // name, age
  //   alert(user[key]); // Piyush, 24
}

// Question 2 : Output

const objs = { a: "one", b: "two", a: "three" };
console.log(objs);

// Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

// multiplyNumeric(menu);

function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

// Question 4 : Output (Important)

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// Question 5 : JSON.Stringify and JSON.parse

const userOne = {
  name: "piyush",
  age: 87,
};

const strObj = JSON.stringify(userOne);

console.log(JSON.parse(strObj));

// Question 6 : Output

console.log([..."Lydia"]);

// Question 7 : Output

const user7 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user7 };

console.log(admin);

// Question 8 : Output

const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

// Question 9 : Output

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// Question 10 : Destructuring in object

let user = {
  name: "Piyush",
  age: 24,
  fullName: {
    firstName: "Piyush",
    lastName: "Agarwal",
  },
};

const name = "Roadside Coder"; // to change name or renaming

const {
  fullName: { firstName },
} = user;

console.log(firstName);

// Question 11 : Output

function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");

// Question 12 : Output

let e = { greeting: "Hey!" };
let d;

d = e;
e.greeting = "Hello";
console.log(e.greeting);

// Question 13 : Output

console.log({ a: 1 } == { a: 1 });
// console.log({a:1} === {a:1});

// Question 14 : Output

let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);

// Question 15 : Output

const values = { number: 10 };

const multiplys = (x = { ...values }) => {
  console.log((x.number *= 2));
};

multiplys();
multiplys();
multiplys(values);
multiplys(values);

// Question 16 : Output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

// Question 17 : Output

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

// Question 18 : Shallow copy VS Deep copy

// Q - How to clone an object without referencing its keys to original object

const obj = { a: 1, b: 2 };
const objclone = Object.assign({}, obj);
// const objclone = JSON.parse(JSON.stringify(employee));
// const objclone = { ...obj };
