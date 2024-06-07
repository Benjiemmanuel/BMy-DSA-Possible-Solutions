function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}
// Big-O = O(n)
console.log(factorial(12));
module.exports = factorial;
