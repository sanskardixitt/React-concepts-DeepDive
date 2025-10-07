var b = 7;

function Test() {
  if (true) {
    let b = "Hello";
  }

  console.log(b);
}
Test();

function example1() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
example1();

//var ignores block boundaries (if, for, etc.) and is only scoped to the function.
//So x is visible everywhere inside example1().

function example2() {
  if (true) {
    let y = 20;
  }
  console.log(y);
}
example2();

// let creates a variable limited to that block { }.
// Once the if block ends, y disappears.

var a = 5;

function example3() {
  let a = 10;
  console.log(a);
}

example3();
console.log(a);

//The inner let a = 10 shadows (hides) the outer var a = 5 only inside the function scope.

function example4() {
  console.log(b);
  var b = 15;
}
example4();

//var declarations are hoisted to the top of their scope but not initialized until the code runs.
//So it’s as if you wrote:

function example5() {
  console.log(c);
  let c = 30;
}
example5();

//let and const are also hoisted, but they stay in the Temporal Dead Zone (TDZ) until their declaration is reached.
//You can’t use them before the line they are declared.

var g = "Global";

function example6() {
  if (true) {
    let g = "Block";
  }
  console.log(g);
}
example6();

//Because let g inside if is block-scoped and disappears after }.

//Temporal deadzone means variables are in the scope but not being declared .
