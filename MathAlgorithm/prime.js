function primeNumber(n) {
  if (n < 2) {
    return `${false} Not a prime number`;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return `${false} is not a prime number`;
    }
  }
  return `${true} "is a prime number`;
}
//Big-O = O(n)
console.log(primeNumber(2));
module.exports = primeNumber;
