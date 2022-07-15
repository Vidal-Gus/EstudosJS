function tabuada(){
    var num1 = document.getElementById('num1')

    var tabuada = document.getElementById('tabuada')
    if(!num1.value){
        window.alert('Por favor digite um numero!')
    } else{
    tabuada.innerHTML = ' '
    for(var i = 0; i<=10;i++){
        var res = document.createElement('option')
        res.setAttribute('value', i)
        res.innerHTML = `${Number(num1.value)} x ${i} = ${Number(num1.value * i)}`
        tabuada.appendChild(res)
    }
}
}