function fibonaci(n) {
  const fab = [0, 1];
  for (let i = 2; i < n; i++) {
    fab[i] = fab[i - 1] + fab[i - 2];
  }
  return fab;
}
// Big-O = O(n)
console.log(fibonaci(3));
module.exports = fibonaci;
