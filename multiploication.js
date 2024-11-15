function multiply(number1, number2) {
  if (number2 === 0) {
    return 0;
  }
  return number2 > 0
    ? multiply(number1, number2 - 1) + number1
    : multiply(number1, number2 + 1) - number1;
}
console.log(multiply(-2, -9));
