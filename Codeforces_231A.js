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
  var testcase=Number.parseInt(readline())
var p = 0
var k = 0
var sum = 0
do{
    var num = readline().split(" ").map(x => parseInt(x))
    for(var i = 0;i<num.length;i++){
        sum=sum+num[i]
    }
    if(sum>1 ){
        k++
    }
    p++
    sum = 0
    
}while(p<testcase)
console.log(k)
}




