var testcase = Number.parseInt(readline())
var input = readline().split(" ").map(x => parseInt(x))
var array  = [1,2,3]
var even = input.map(x => x%2)
console.log(typeof(even));
console.log(even);
var length = even.length
var count0 = 0
var count1 = 0

for(let i = 0 ; i <= testcase ;i++){
   for(let j = 0; j < length ; j++){
    if(even[j] == 1){
        console.log('heda')
    }
   }
}
