var input=readline()
console.log(typeof(input))
var s = "hello"
for(i in s){
    if(input.search(i)===true){
        console.log("yes")
    }
    else{
        console.log("No")
    }
}



