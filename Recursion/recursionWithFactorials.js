function recursiveFactorial(n){
  //Base case is that the number is 0
  if(n === 0){
    return 1;
  }
  return n * recursiveFactorial(n-1);
}
// Big-O = O(n);
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(5));
module.exports = recursiveFactorial;