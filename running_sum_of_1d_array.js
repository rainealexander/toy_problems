/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      i > 0 ? result.push(nums[i] +result[i - 1]) : result.push(nums[i]);
    }
    return result;
};

const input = [1,2,3,4];

console.log(runningSum(input));