const sqrtOfArr = (arr) => arr.map(Math.sqrt);

const filterOdd = (arr) =>
  arr.filter((value) => {
    return value % 2 !== 0;
  });

const halfOfElements = (arr) => arr.map((value) => value / 2);

const filterStrLongerThan5 = (arr) =>
  arr.filter((str) => {
    return str.length > 5;
  });

const toUpperCaseArr = (arr) => arr.map((str) => str.toUpperCase());

const longestStr = (arr) =>
  arr.reduce((ele1, ele2) => {
    return ele1.length > ele2.length ? ele1 : ele2;
  });

const combinesAllStrings = (arr) => arr.reduce((str1, str2) => str1 + str2);

const productOfNumbers = (arr) => arr.reduce((num1, num2) => num1 * num2);

const numberOfOdds = (arr) => {
  let odds = 0;
  for (number of arr) {
    odds += number % 2 !== 0 ? 1 : 0;
  }
  return odds;
};