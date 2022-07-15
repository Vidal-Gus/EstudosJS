
var list = []

function adicionar() {
    var num1 = document.getElementById('num1')

    if (num1.value <= 0 || !num1.value || num1.value > 100) {
        window.alert('Erro! Verifique a linha de valor!')
    } else if (list.indexOf(num1.value) != -1) {
        window.alert('Valor já encontrado na lista!')
    } else {
        list.push(num1.value)
        let res = document.getElementById('res')
        var select = document.getElementById('adicionados')
        var elementos = document.createElement('option')
        elementos.setAttribute('name', `elemento${Number(num1.value)}`)
        select.appendChild(elementos)
        elementos.innerHTML += `Elemento ${num1.value} adicionado`
        res.innerHTML = ' '
    }
    num1.value = ''
    num1.focus()
}

function finalizar() {
    var res = document.getElementById('res')
    var paragrafo = document.createElement('p')
    paragrafo.setAttribute('name', 'resultado')
    res.innerHTML = ''
    if (list.length == 0) {
        window.alert('Adicone valores')
        return 0
    }

    var maior = 0
    var menor = 0
    //Verificação de Maiores e menores
    for (var i = 0; i <= list.length; i++) {
        console.log(list[i])
        if (maior < Number(list[i])) {
            maior = list[i]
        }
        if (i == 0) {
            menor = list[i]
        } else if (menor > Number(list[i])) {
            menor = list[i]
        }
    }
    //Somando
    var soma = 0
    for (var i = 0; i < list.length; i++) {
        soma += Number(list[i])
    }

    var media = soma / Number(list.length)
    res.appendChild(paragrafo)
    paragrafo.innerHTML = `<p>Ao todo são ${list.length} elementos</p> `
    paragrafo.innerHTML += `<p>O menor valor informado ${menor}</p>`
    paragrafo.innerHTML += ` <p>O maior valor na lista ${maior}</p>`
    paragrafo.innerHTML += ` <p>A soma dos valores é ${soma}</p>`
    paragrafo.innerHTML += ` <p>a média dos valores é ${media}</p>`

}


