/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for(let i =0;i<arr.length;i++){
        if(!arr[i]){
            arr.pop();
            arr.splice(i+1,0,0);
            i++;
        }
    }
    
    
};
const arr = [1,0,2,3,0,4,5,0];
duplicateZeros(arr);
console.log(arr);

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]