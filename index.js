const text =
  "React is a JavaScript library for building user interfaces. It is used to create fast and interactive web applications.";
// Syntax of slice(startpoint ,endpoint)
// start point is included and it stops before the end means excluded
// Also negative point opposite
const shortText = text.slice(0, 50) + " ....";
// console.log(shortText)
// const string = new String()
// console.log(typeof string);

// call ,apply and spread operator

// call

const person = {
  name: "Afaq",
};
const developer = {
  name: "Coder",
};

function greet(msg) {
  // console.log(this.name, msg);
}

// greet.call(person,"Hello")
// greet.call(developer,"Hello")

// greet.apply(person,["Hello"])
// greet.apply(developer,["Hello"])

// Spread operator

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// const combineArr = [...arr1,...arr2,]

const obj1 = {
  name: "afaq",
  age: 20,
};
const obj2 = {
  name: "coder",
  age: 22,
};

// const combineObj = {...obj1,...obj2,...arr1}

let values = [];
for (const key in obj1) {
  values.push(obj1[key]);
}

// console.log(values);

const combineArr = [...arr1, ...arr2, ...values];

// console.log(combineArr);

// this keyword it refer to the context ?

const obj = {
  username: "afaq",
  age: 20,
  wellcome: function () {
    console.log(this);
  },
};

// rest operator

function restOperator(...num) {
  console.log(num);
}

restOperator(1,2,3,4,5)
