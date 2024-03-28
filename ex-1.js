// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  //Start coding here
  let array = s.split(" ");
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  let lastIndex = newArray.length-1
  return newArray[lastIndex].length
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6


