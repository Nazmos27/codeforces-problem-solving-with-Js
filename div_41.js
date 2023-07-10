process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
 
process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });
 
    main();
});
 
function readline() {
    return inputString[currentLine++];
}
/* Common Template Ends */
function main() {
  var testcase = Number.parseInt(readline())
  var a = ['c','o','d','e','f','o','r','c','e','s']
  for(var i =0 ; i< testcase;i++){
      var input = readline()
      var x = a.includes(input)
      if(x === true){
      console.log("YES")
      }else{
      console.log("NO")
      }
  
  }
}
