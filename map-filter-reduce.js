// Map is the used to create the new array from the existing array . We use iterate the pass function over the elements of the orginial array .

const nums = [1, 2, 3, 4];

const numsArr = nums.map((item) => {
  return item * 2; //mutliply each element by 2
});

console.log(numsArr); // [ 2, 4, 6, 8 ]

//Filter - it take the each element of the array and apply some conditional against it , element qualifying will be pushed to new array .

const numFilter = nums.filter((item) => {
  return item > 2;
});

console.log(numFilter); //[ 3, 4 ]

//Reduce - reduces array of values down to the one value .

const sumArr = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sumArr);

//acc - sum of thr previous values of the array , initialized by 0 ; if nothing is given it will points to first element of the array.

//Polyfills for the map

//syntax
//Array.map((num , i , arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const polyMap = nums.myMap((item) => {
  return item * 2;
});

console.log(polyMap);

//pollyfill for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const polyF = nums.myFilter((ITEM) => {
  return ITEM > 2;
});

console.log(polyF);

//PLOYFILLS FOR THE reducer arr.reduce((arr , curr , i , arr),initia value);

Array.prototype.myReducer = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const polyReducer = nums.myReducer((acc, curr) => {
  return acc + curr;
}, 0);

console.log(polyReducer);

//const names = students.filter((item)=>{

return item.marks > 50;

//})

//const sum = students.reduce((acc , curr)=>{
return acc + curr.marks;
//},0);

// all these function allows chaining

//const combine = students.filter((i)=> i.marks > 50 ).map((i)=> return i.name)

/* const output = student.map((i)=>{

    if(i.marks < 60)
    {
        i.marks += 20;
    }
    return i ;

}).filter((i)=>i.marks > 60).reduce((acc , curr)=> acc + curr , 0) */
