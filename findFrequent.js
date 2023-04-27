
const mostFrequent = (arr)=>{
    const count = {};
    let maxItem = null;
    let  maxCount = 0;
    for(let i=0;i<arr.length;i++){
        const item = arr[i];
        count[item] = (count[item] ?? 0) + 1;

        if(count[item]> maxCount){
            maxCount = count[item];
            maxItem = item;
        }

    }
    return [maxItem,maxCount];




}
const arr = [1, 2, 3, 2, 1, 2, 3, 3, 3, 3, 3];
console.log(mostFrequent(arr)); // Output: 3

