
    var size = Number.parseInt(readline())
    var ar = readline().split(" ").map(x=>parseInt(x))
    //console.log(ar)
    for(var i=0;i<size;i++){
        if(ar[i]==1 || ar[i]==2 || ar[i]==3){
            console.log("NO")
        }else{
            for(var j = 2;j<=Math.sqrt(ar[i]);j++){
                if(ar[i]==4){
                    console.log("YES")
                    break;
                }
                else if((Math.sqrt(ar[i])-(Math.round(Math.sqrt(ar[i])))!==0)){
                    console.log("NO")
                    break
                }
                else if((Math.sqrt(ar[i])-(Math.round(Math.sqrt(ar[i])))===0) && ar[i]%j===0){
                    console.log("NO")
                    break
                }
                
                else{
                    console.log("YES")
                    break
                }
            }
        }
    }