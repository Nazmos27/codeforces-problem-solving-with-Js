
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
    var n = input[0]
    var position=input[1]
    if(n%2===0){
        var median = n/2
        if(position<=median){
            var result  = (position*2)-1
        }
        else if(position>median){
            result = ((position*2)-n)
        }
    }else{
        median = (n+1)/2
        if(position<=median){
            result = (position*2)-1
        }
        else{
            result = (position*2)-(n+1)
        }
    }
    //console.log(median)
    console.log(result)
}