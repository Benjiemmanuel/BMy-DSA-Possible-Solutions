/* Given an array of an 'n' element and an element target 't', return the index of the first index of 't' in the array. If the target element is not in the array, return -1. */

function linearSearch(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}
// Big-O = O(n)
console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([2, 10, 4, 6], 9))
module.exports = linearSearch;