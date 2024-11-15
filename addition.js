function addition(number1, number2) {
  if (number2 === 0) {
    return number1;
  }
  return number2 < 0
    ? addition(number1, number2 + 1) - 1
    : addition(number1, number2 - 1) + 1;
}
console.log(addition(-2.8, -3));
