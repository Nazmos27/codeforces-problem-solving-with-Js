
var dn = Number.parseInt(readline())
var volume = readline().split(" ").map(x=>parseInt(x))
var s = 0
for(var i = 0;i<dn;i++){
    s = s+(volume[i]/100)
}
s = s.toFixed(10)
console.log((s/dn)*100)

//accepted
