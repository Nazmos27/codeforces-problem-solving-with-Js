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

    var num = readline().split(" ").map(x => parseInt(x))
    var position = num[1]
    var k = 0
    var score = readline().split(" ").map(x => parseInt(x))
    for(var i = 0;i< score.length;i++){
        if(score[i]===0){
            break
        }
        else if(score[i]>=score[position-1]){
            k++
        }
    }
    print(k)
}