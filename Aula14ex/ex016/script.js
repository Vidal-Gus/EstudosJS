function contagem() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var cont = document.getElementById('contagem')
    var res = document.getElementsByClassName('res')[0]
    var indice = Number(inicio.value)

    if (!inicio.value) {
        window.alert(' linha de inicio vazia')

    } else if (!fim.value) {
        window.alert('Linha Fim vazia')

    } else if (!cont.value || cont.value == 0) {
        window.alert('A contagem não pode ser vazia ou igual a 0')

    } else if (Number(inicio.value) >= Number(fim.value)) {
        //Regressiva
        res.innerHTML = ``
        while (Number(indice) >= Number(fim.value)) {
            res.innerHTML += `${Number(indice)} &#128073;&#127998;`
            indice -= Number(cont.value)
        }
        res.innerHTML += ` &#127988;`

    } else {
        //Progressiva
        res.innerHTML = ` `
        while (Number(indice <= Number(fim.value))) {
            res.innerHTML += `${Number(indice)}  &#128073;&#127998;`
            indice += Number(cont.value)
        }
        res.innerHTML += ` &#127988;`
    }
}

/*while(Number(indice <= Number(fim.value))){
        res.innerHTML += `${Number(indice)} - `
        indice += Number(cont.value)
        }*/