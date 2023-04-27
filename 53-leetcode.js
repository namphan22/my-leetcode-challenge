/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let current_sum = 0;
  let hasOnlyNegative = true;
  let max_sum = -Number.MAX_VALUE;
  let maxnegativecase = -Number.MAX_VALUE;

  if (nums.length == 1) {
      return nums[0];
  }
  else {
      for (const item of nums) {
          if (hasOnlyNegative && item < 0) {
              maxnegativecase = Math.max(maxnegativecase, item);
          }
          else {
              hasOnlyNegative = false;
          }
          current_sum = Math.max(0, current_sum + item);
          max_sum = Math.max(max_sum, current_sum);
      }
  }
  return hasOnlyNegative ? maxnegativecase : max_sum;

};

