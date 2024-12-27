const mazeGenerator = function (height, width){
  const array = Array(height).fill(Array(width).fill("-"));
  return array;
}

console.table(mazeGenerator(10,10));

//same -> single space
//different -> no or double space