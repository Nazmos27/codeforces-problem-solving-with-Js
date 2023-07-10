var input = Number.parseInt(readline())
var ar = [4,7,44,47,74,77,447,444,474,477]
var d = 0
for(var i = 0;i<ar.length;i++){
    if(input%ar[i]===0){  
        d=d+1
        break 
    }
}
if(d>0){
    print("YES")
}
else{
    print("NO")
}
