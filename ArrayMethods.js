// Randam id generator
function idGenerator() {
  let randomId = "";
  const alphabets = "abcdefghijklmnopqurstuvwxyz";
  const numbers = "1234567890";
  const specialChar = "!@#$%^&*_-?~";
  const arr = [...alphabets, ...numbers, ...specialChar];

  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * arr.length - 1);
    randomId = randomId + arr[idx];
  }

  return randomId;
}
// console.log(idGenerator());

const arr1 = [
  "JavaScript",
  "ReactJS",
  "NextJS",
  "TypeScript",
  "NodeJS",
  "ReduxToolKit",
];
// join function that join string with any joiner you pass and it return new string
// My join Function for array datatype
Array.prototype.Myjoin = function (joiner = " | ") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result = result + (this[i] + (i != this.length - 1 ? joiner : ""));
    // console.log(i, "!=", input.length - 1,result);
  }
  return result;
};

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
  deleteCount = Math.min(deleteCount, this.length - start); // => ?
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

// const num = [1, 2, 3, 4, 5];
// console.log(num.splice(1, 5));
// console.log(num.mySpliceFunc(0, 4));
// console.log(num);

// Map build in function
Array.prototype.myMapFunc = function (callBackFunc) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callBackFunc(this[i], i, this);
  }
  return newArr;
};

// console.log(
//   tools.myMapFunc((tool, idx, arr) => {
//     return tool;
//   }),
// );
// console.log(tools.map((tool, idx, arr) => {
//   return tool
// }));

// filter build in function
Array.prototype.myFilterFunc = function (callBackFunc) {
  const arr = [];
  let c = 0;
  for (let i = 0; i < this.length; i++) {
    const res = callBackFunc(this[i], i, this);
    if (res) {
      arr[c] = this[i];
      c++;
    }
  }
  return arr;
};

// console.log(tools.filter((tool) => tool == "ReactJS"));
// console.log(
//   tools.myFilterFunc(function (tool) {
//     return tool == "ReactJS";
//   }),
// );

const tools = [
  "JavaScript",
  "ReactJS",
  "NextJS",
  "TypeScript",
  "Node",
  "ReduxToolKit",
];
// some build in function
Array.prototype.mySome = function (callBackFunc) {
  // console.log("Now is this keyword value is :", this);

  for (let i = 0; i < this.length; i++) {
    let val = callBackFunc(this[i]);
    if (val) {
      return true;
    }
  }
  return false;
};

// console.log(tools.some((word)=> word === "Node" ));
// console.log(tools.mySome((word)=> word === "Node"));

// push build in function
const languages = [];
Array.prototype.myPush = function (...rest) {
  let c = this.length;
  for (let i = 0; i < rest.length; i++) {
    this[c] = rest[i];
    c++;
  }
  return this;
};

// languages.myPush("Java", "C++", "JavaScript", "swift", "php");
// console.log(languages);
// languages.myPush("python");
// console.log(languages)


// pop build in function
Array.prototype.myPop = function () {
  const val = this[this.length - 1];
  this.length--;
  return val;
};

// console.log(languages.pop());
// console.log(languages.myPop());
// console.log(languages);

// toString build in function
let number = [];
Array.prototype.myToString = function () {
  let toString = "";
  let coma = ",";
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      toString += this[i];
      if (i != this.length - 1) {
        toString += coma;
      }
    }
    return toString;
  }
};

// number.myPush(1, 2, 3, 4, 5, 6, 7);
// console.log("Create a arr of numbers: ", number);
// console.log(number.myToString())

// every build in function and not complete
Array.prototype.mySort = function (callBackFunc) {
  let res = null;
  let j = 1;
  for (let c = 0; c < this.length; c++) {
    for (let i = 0; i <= this.length - j; i++) {
      res = callBackFunc(this[i], this[i + 1]);
      if (res > 0) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
      // if (res < 0) {
      //   let temp = this[i];
      //   this[i] = this[i + 1];
      //   this[i + 1] = temp;
      // }
    }
    j++;
  }

  return "function end";
};

// number.myPush(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(number.reverse());
// number.mySort((a, b) => b - a);
// console.log(number);
// number.mySort((a, b) => console.log(a + " - " + b + " = " + (a -b)));
// console.log(number);

// find build in method
Array.prototype.myFindFunc = function (callBackFunc) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFunc(this[i])) {
      return this[i];
    }
  }
  return undefined;
};

// console.log(tools.myFindFunc((element) => element === "NodeJS"));
