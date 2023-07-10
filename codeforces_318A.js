"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
  // your code goes here
   var input = readline().split(" ").map(x => parseInt(x))
    var size = input[0]
    var position = input[1]
    var even =[]
    var odd = []
    for(var j = 1,i = 0;i<size,j<=size;j=j+2,i++){
        odd[i]=j
        even[i]=(j+1)
    }
    // for(var j = 2,i = 0;i<size,j<=size;j=j+2,i++){
    //     even[i]=j
    // }
    // console.log(odd.concat(even))
    console.log(odd.concat(even)[position-1])
}
//inefficient code...take too large memory for n=10^12