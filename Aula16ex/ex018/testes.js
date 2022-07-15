
var list = [8,6,10,3,2,7,9,20]

console.log(list)
console.log(list[2])

var maior=0, menor=0

for(var i = 0; i <= list.length; i++){
    console.log(list[i])
    if(maior < list[i]){
        maior = list[i]
    }
    if(i == 0){
        menor = list[i]
    } else if(menor > list[i]){
        menor = list[i]
    }
}
console.log(maior)
console.log(menor)
