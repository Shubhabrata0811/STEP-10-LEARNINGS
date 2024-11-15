function exponent(base, power) {
  if (power === 0) {
    return 1;
  }
  return power > 0
    ? exponent(base, power - 1) * base
    : exponent(base, power + 1) / base;
}
console.log(exponent(4, 1/2));