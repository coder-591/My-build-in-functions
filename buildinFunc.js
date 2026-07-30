// Randam id generator

function idGenerator() {
  let randomId = "";
  const alphabets = "abcdefghijklmnopqurstuvwxyz";
  const numbers = "1234567890";
  const specialChar = "!@#$%^&*_-?~";
  const arr = [...alphabets, ...numbers, ...specialChar];

  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * 51);
    randomId = randomId + arr[idx];
  }

  return randomId;
}

// console.log(idGenerator());

// join function that join string with any joiner you pass and it return new string
const name = "Afaqcoder";
const username = "programmer";
const arr = [
  "JavaScript",
  "ReactJS",
  "NextJS",
  "TypeScript",
  "NodeJS",
  "ReduxToolKit",
];

// My join Function for string datatype
String.prototype.Myjoin = function (joiner = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i] + (i != this.length - 1 ? joiner : "");
    // console.log(i, "!=", input.length - 1,result);
  }
  return result;
};

// My join Function for array datatype
Array.prototype.Myjoin = function (joiner = " | ") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i] + (i != this.length - 1 ? joiner : "");
    // console.log(i, "!=", input.length - 1,result);
  }
  return result;
};

// console.log(username.Myjoin());
// console.log(arr.Myjoin(" | "));
// console.log(join(name, joiner));
// console.log(name);

// JS join function
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.join());

// now My split funciton and split is for string
const str =
  "apple,banana,orange,mango,grapes,kiwi-watermelon,pineapple,strawberry,blueberry";

String.prototype.MySplit = function (spearator) {
  let newArr = [];
  let c = 0;

  if (!spearator) {
    newArr.push(this);
    return newArr;
  }

  if (!this.includes(spearator)) {
    newArr.push(this);
    return newArr;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i] === spearator) {
      let word = "";
      for (let j = c; j < i; j++) {
        // if (this[j] === spearator) j++; we can do this too
        word = word + this[j];
      }
      c = i + 1; // but it looks clean
      newArr.push(word);
    }
  }
  
  let word = "";
  for (let i = c; i < this.length; i++) {
    // console.log("Last sperator",c ,"and loop index",i,"and str length",this.length);
    word = word + this[i];
    if (i == this.length - 1) {
      newArr.push(word);
    }
  }

  return newArr;
};

// console.log(str.MySplit());
// console.log(str.MySplit(" "));
console.log(str.MySplit("-"));
