// "use strict";
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
 
// function print(x) {
//   console.log(x);
// }
// let inputString = "";
// let currentLine = 0;
 
// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });
// process.stdin.on("end", () => {
//   inputString = inputString.split("\n");
//   main();
// });
// function readline() {
//   return inputString[currentLine++];
// }
 
// // ********** Code Start **********

// function main() {
    var testcase = Number.parseInt(readline())
    var input = readline().split(" ").map(x => parseInt(x))
    // console.log(testcase)
    // console.log(typeof(input));
    for (let i = 1; i <= testcase; i++) {
        if (input[0] + input[1] == input[2]) {
            console.log("+");
        } else if (input[0] - input[1] == input[2]) {
            console.log("-");
        }

    }




