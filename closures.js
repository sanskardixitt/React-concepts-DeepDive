//lexical scope - variables declared outside the function can be accessed inside of another function defined , after the variable declaration .
// give you access to the variables and methods of the outside function inside the inner function .

function makeFunc() {
  var name = "john";

  function displayName() {
    //inner function of the outer function
    console.log(name);
  }
  return displayName;
}

var myFun = makeFunc();

myFun();

// everytime we create a new function , it binds with its lexical scope .

/* makeFunc()();  we can like this too , if function is returning another func*/

//every closures have 3 scopes - local , outer function , global scope

function createBase(num) {
  return function (innerSum) {
    console.log(num + innerSum); //here , inner function will maintain the lexical scope or reference to the outer function's scope
  };
}

const temp = createBase(8);

temp(5);

function TimeClosures() {
  let arr = [];

  for (let i = 0; i < 10000; i++) {
    arr[i] = i * i;
  }

  //console.log("yes");

  return function (index) {
    console.log(arr[index]);
  };
}

console.time("5");

const timeClosure = TimeClosures();

timeClosure(5);

console.timeEnd("5");

// output question

for (let i = 0; i < 3; i++) {
  // let is bloacked scope & var is global scoped
  setTimeout(() => {
    console.log("i", i);
  }, i * 1000);
}
/* i 0
   i 1
   i 2 */

//to use var only

for (var i = 0; i < 3; i++) {
  // let is bloacked scope & var is global scoped

  function inner(i) {
    setTimeout(() => {
      console.log("i", i);
    }, i * 1000);
  }

  inner(i);
}

//private counter

function increment() {
  var _counter = 0;

  function add() {
    _counter += 1;
  }

  function retreive() {
    return _counter;
  }

  return {
    add,
    retreive,
  };
}

const tempIncre = increment();

console.log("ff", increment());

tempIncre.add();
const u = tempIncre.retreive();

console.log(u);

//module pattern

//Module Pattern in JavaScript! This is a classic design pattern used to encapsulate code, create private and public members, and avoid polluting the global scope

/* The Module Pattern is a way to organize code into self-contained units (modules) with:

Private variables and functions — not accessible from outside.

Public methods — accessible from outside via a returned object. */

const myModule = (function () {
  let privateVar = 0;

  function privateFunction() {
    console.log("i am private function" + privateVar);
  }

  return {
    increment: function () {
      privateVar++;
    },

    getCounter: function () {
      return privateFunction();
    },
  };
})();

myModule.increment();
myModule.getCounter();

///run only once - ployfill

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const helloo = once(() => console.log("hello"));
helloo();
helloo();

//polyfill for memoized

function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);
    console.log(argsCache);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }

    return res[argsCache];
  };
}

const longCalc = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {
    return num1 * num2;
  }
};

const memoFunction = myMemoize(longCalc);

console.time("firstcall");
console.log(memoFunction(8555, 55555));
console.timeEnd("firstcall");
console.time("firstcall");
console.log(memoFunction(8555, 55555));
console.timeEnd("firstcall");

// CLOSURE Interview Question

// Question 1 : Lexical Scope

// global scope
function local() {
  // local scope
  var username = "Roadsidecoder";
  console.log(username);
}
local();

// Question 2 : Closure

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// Question 3 : Closure scope chain

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20

// Question 4 : Output

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); //1
  }
  console.log(count); // 0
})();

// Question 5 : Write function for this addSix()

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(21);

// Question 6 : Time Optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

// Question 6 : Block scope and set Time out

// using let
function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function (log) {
      console.log(i); // 0,1,2
    }, i * 1000);
  }
}
a(); // using let will give you 0 , 1 ,2

// using var
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function (log) {
      console.log(i); // 3 times  3
    }, i * 1000);
  }
  inner(i);
}

// Question 7 : How would you use a closure to create a private counter?

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}
const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());

// Question 8 : Module Pattern :

var module = (function () {
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();
module.publicMethod();
module.privateMethod();

// Question 9 : Make this run only once

let view;
function Like() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already");
    } else {
      view = "Roadsidecoder";
      console.log("Subscribe", view);
      called++;
    }
  };
}
let isSub = Like();
isSub();
isSub();
isSub();
isSub();

// Question 10 : once Polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}
const hello = once((a, b) => {
  console.log("Hi", a, b);
});
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);

// Question 11 : Memoize Polyfill

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {
    return num1 * num2;
  }
};

const MemoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(MemoizeClumsyProduct(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(MemoizeClumsyProduct(9467, 7649));
console.timeEnd("Second call");

// Question 12: closure VS scope
