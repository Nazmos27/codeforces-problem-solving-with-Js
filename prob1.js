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

  var testcase = Number.parseInt(readline())
  var pi= "3141592653589793238462643383279"//31digits
  var p=0
  do{
      var input = readline()
      var count=0
      for(var i = 0;i<31;i++){
          if(pi[i]===input[i]){
              count=count+1
          }else{
              break;
          }
          
      }
      console.log(count)
      p++
  
  }while(p<testcase)
  
}
