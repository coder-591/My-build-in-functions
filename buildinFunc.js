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
const arr1 = [
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
    result = result + (this[i] + (i != this.length - 1 ? joiner : ""));
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
// console.log(str.MySplit("-"));

// includes buildin function for array and string

const arr2 = [1, 7, , , 5, 6, 5, 4, 3, 4];
Array.prototype.myIncludesfunc = function (searchItem, fromIndex = 0) {
  if (fromIndex < 0) {
    console.log("Negative values is not allow it always start with 0");
    fromIndex = 0;
  }

  for (let i = fromIndex; i < this.length; i++) {
    if (
      this[i] === searchItem ||
      Number.isNaN(this[i] && Number.isNaN(searchItem))
    ) {
      return true;
    }
  }

  return false;
};

// console.log(arr2.includes(7));
// console.log(arr2.myIncludesfunc(undefined, -4));

// Slice build in function

const a =
  "My brain can learn anything if I repeat it daily and that the whole point and only matters";
const tools = [
  "JavaScript",
  "ReactJS",
  "NextJS",
  "TypeScript",
  "NodeJS",
  "ReduxToolKit",
];

String.prototype.mySliceFunc = function (start, end = this.length) {
  let text = "";

  for (let i = start; i < end; i++) {
    text = text + this[i];
  }
  return text;
};

// console.log(a.slice(3));
// console.log(a.mySliceFunc(3));

Array.prototype.mySliceFunc = function (start, end = this.length) {
  let arr = [];
  let c = 0;

  for (let i = start; i < end; i++) {
    arr[c++] = this[i];
  }
  return arr;
};

// console.log(tools.slice(1,3));
// console.log(tools.mySliceFunc(1,3));
// console.log(tools);

// Splice build in function
Array.prototype.mySpliceFunc = function (start, deleteCount) {
  if (start == undefined) return [];

  deleteCount = Math.min(deleteCount, this.length - start); // ?

  let newArr = [];
  let c = 0;
  //  copying
  for (let i = start; i < this.length; i++) {
    if (c == deleteCount) break;
    newArr[c++] = this[i];
  }
  //  shifting
  for (let i = 0; i < deleteCount; i++) {
    if (start >= 0 && start < this.length) {
      for (let j = start; j < this.length; j++) {
        this[j] = this[j + 1];
      }
    }
  }

  this.length -= deleteCount;

  return newArr;
};

const num = [1, 2, 3, 4, 5];
// console.log(num.splice(1, 5));
console.log(num.mySpliceFunc(0, 4));
console.log(num);
