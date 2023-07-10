var testcase = Number.parseInt(readline())


var x=0
var y =0
for(var i = 0;i<testcase;i++){
    var input = readline().split("").map(x => x)
    for(var j = 0;j<input.length();j++){
        if(input[j]=="U"){
            x=x+1
        }
        else if(input[j]=="D"){
            x=x-1
        }
        else if(input[j]=="L"){
            y=y+1
        }
        else{
            y=y-1
        }
    }
    if(x==1 && y==1){
        console.log("YES")
    }else{
        console.log("NO")
    }
}