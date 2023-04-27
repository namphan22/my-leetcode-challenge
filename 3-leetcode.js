/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const hashTable = {};
    let left = 0;
    let longestSubString = 0;
    for (let right = 0, left = 0; right < s.length; right++) {
        const char = s[right];
        if (hashTable[char]) {
            left = 


        }
        longestSubString = Math.max(longestSubString, right - left + 1);
        hashTable[char] = right +1;
 }

};
const s1 = "abcabcbb"; // output 3
const s2 = "bbbbb" // output 1
console.log(lengthOfLongestSubstring(s1));
