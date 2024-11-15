function factorial(number) {
  if(number < 0){
    return NaN;
  }
  if(number < 2){
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(-1));