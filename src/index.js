const isDivisible = (a, b) => a % b === 0;

const getGcd = (a, b) => {
  const small = a < b ? a : b;
  for (let i = small; i >= 1; i--) {
    if (isDivisible(a, i) && isDivisible(b, i)) {
      return i;
    }
  }
};

console.log(getGcd(54, 24));
