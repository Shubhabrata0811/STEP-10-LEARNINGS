// const chars = ["/ / ", "\\ \\ ", " /\\ ", "\\  /"];

// const row = Array(10).fill(0);
// row.map((val, idx, arr) => arr[idx] = chars[Math.floor((Math.random() * 100) % 4)])

// console.log(row.join(""));

function generatePattern(rows) {
  let pattern = "";
  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < rows * 2; j++) {
      if ((i + j) % 2 === 0) {
        line += j % 4 === 0 ? "\\ \\" : "/ /";
      } else {
        line += " ";
      }
    }
    pattern += line + "\n";
  }
  return pattern;
}

const rows = 10;
console.log(generatePattern(rows));
