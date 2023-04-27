/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement),i];
        }

        map.set(nums[i],i);

    }
    return [];
};
var twoSum2 = function (nums,target){
    
}
const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums,target));

/*


{
    2: 0,
    7: 1,
    11:2,
    15:3
    
}
*/
