const name = "Afaqcoder";
const username = "programmer";
// join function that join string with any joiner you pass and it return new string
// My join Function for string datatype
String.prototype.Myjoin = function (joiner = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i] + (i != this.length - 1 ? joiner : "");
    // console.log(i, "!=", input.length - 1,result);
  }
  return result;
};

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
      c = i + 1; // but it looks cleaner
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
// console.log(str.MySplit(""));
// console.log(str.MySplit(" "));
// console.log(str.MySplit("-"));

// Slice build in function
const myBelief =
  "My brain can learn anything if I repeat it daily and that the whole point and only matters";

String.prototype.mySliceFunc = function (start, end = this.length) {
  let text = "";

  for (let i = start; i < end; i++) {
    text = text + this[i];
  }
  return text;
};

// console.log(a.slice(3,12));
// console.log(a.mySliceFunc(3,12));


// toUpperCase build in function
const user = "shayan";
String.prototype.myToUpperCaseFunc = function () {
  let upperCase = "";

  for (let i = 0; i < this.length; i++) {
    //  character to number
    let assci = this.charCodeAt(i) - 32;
    //  number to character
    upperCase += String.fromCharCode(assci);
  }
  return upperCase;
};

// console.log(user.myToUpperCaseFunc());
// console.log(user.toUpperCase())
// console.log(user);