

function reverseString(string){
  if(string.length < 2){
    return string;
  }
  return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
}

reverseString("Hello World!");