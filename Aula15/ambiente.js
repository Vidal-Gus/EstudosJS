let num = [5,2,8,9]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

/*for(var i=0; i <= num.length;i++){
    console.log(num[i])
} */

for(var i in num){
console.log(num[i])
}

let pos = num.indexOf(11)
console.log(`O valor esta na posição ${pos}`)