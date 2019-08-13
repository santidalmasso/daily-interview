/* Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x.
Return -1 if the target is not found. */

function getRange(arr, target){
    var firstIndex = -1, lastIndex = -1;

    for (const e in arr) {
        if(arr[e] === target){
            lastIndex = parseInt(e);
            if(firstIndex === -1){
                firstIndex = parseInt(e);
            }
        }
    }
    return [firstIndex,lastIndex]
}


console.log(getRange([1,3,3,5,7,8,9,9,9,15],9))
console.log(getRange([100,150,150,153],150))
console.log(getRange([1,2,3,4,5,6,10],9))
console.log(getRange([1,2,2,2,2,3,4,7,8,8], 2))