// Exercise 2: Single Number

const singleNumber = function (nums) {
  // Start coding here
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }
  console.log(count);

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] === 1) {
      return nums[i]
    }
  }
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
