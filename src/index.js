module.exports = function check(str, bracketsConfig) {
  // your solution
  const config = bracketsConfig
  .reduce((res, [bracketOpen, bracketClose])=>
   ({ ...res, [bracketOpen]: bracketClose }), {});

str = str.split('');
let stack = [];
let bool = false;

for (bracket of str) {
  if (stack.includes(config[bracket])) {
    bool = true;
    // console.log(bool);
  }
  if(config[bracket] && !bool) {
    stack.push(bracket);
    // console.log(stack);
  } else {
    if (bracket === config[stack.pop()]) {
      bool = false;
    }
    else { 
      return false;
    }
    }
  }
  console.log(stack);
  if (stack.length !== 0) return false;
  return true;
}
