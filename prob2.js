var testcase=Number.parseInt(readline())
var num = readline().split(" ").map(x => parseInt(x))

var sum=num[1]
var miss=num[2]


do{
    var summation=0;
    var d = []
    for(var p=0;p<num[0];p++){
        
        d.push(Math.floor((Math.random() * 6) + 1))
    
    }
    for(var i = 0;i<d.length;i++){
        summation = summation +d[i]
        if(summation==miss){
            break;
        }
    }
    
}while(summation==miss)
console.log((sum-miss),d)