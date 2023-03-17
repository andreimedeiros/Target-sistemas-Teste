let str = "Target Sistemas";
let newStr = "";

console.log(str.length)

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}

console.log(newStr);