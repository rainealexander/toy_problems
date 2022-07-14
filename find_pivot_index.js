/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let result = -1;
  let sum = 0;
  let rightSum = 0;
  nums.forEach(num => {
    sum += num;
  })
  for (let i = nums.length - 1; i >= 0; i--) {
    sum -= nums[i];
    if (sum === rightSum) {
      result = i;
    }
    rightSum += nums[i];
  }
  return result;
};

//  Incorrect Attempt (overcomplicated)
//
//  var pivotIndex = function(nums) {
//   let result = -1;
//   let evenLength = nums.length % 2 === 0;
//   let pivotIndex = Math.floor(nums.length / 2);
//   let leftSum = 0;
//   let rightSum = 0;
//   for ( let i = 0; i < pivotIndex; i++) {
//     leftSum += nums[i];
//     if(evenLength && i === pivotIndex -1) {
//       break;
//     }
//     rightSum += nums[nums.length - (i + 1)];
//   }
//   console.log(`left: ${leftSum}, right: ${rightSum}`);
//   let direction = Math.abs(leftSum) >= Math.abs(rightSum) ? -1 : 1;
//   if (leftSum === rightSum) {
//     result = pivotIndex;
//   }
//   while (pivotIndex >= 0 && pivotIndex < nums.length - 1) {
//     if (direction === 1) {
//       leftSum += nums[pivotIndex];
//       rightSum -= nums[pivotIndex + 1]
//     } else {
//       leftSum -= nums[pivotIndex - 1];
//       rightSum += nums[pivotIndex]
//     }
//     pivotIndex += direction;
//     console.log(`left: ${leftSum}, right: ${rightSum}`);
//     if (leftSum === rightSum) {
//       result = pivotIndex;
//       if (direction === 1) {
//           return result;
//       }
//     }
//   }
//   return result;
// };

let testArray = [-1,-1,0,-1,1,1];
pivotIndex(testArray);
