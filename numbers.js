function isEven(number) {
  if (number < 2) {
    return number === 0;
  }
  return isEven(number - 2);
}

function isEven2(number) {
  return number <= 1 ? number === 0 : isEven2(number - 2);
}

console.log(isEven(2));


function reverseNumber(number) {
  if(number === 0){
    return 0;
  }
  let power =("" + number).length - 1;
  let digit = number % 10;
  return digit * 10 ** power + reverseNumber((number - digit) / 10);
}

console.log(reverseNumber("12345"));
console.log(reverseNumber(10));
console.log(reverseNumber(123));
