

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora >= 0 && hora < 12){
        //bom Dia
        img.src = 'foto-manha.png'
        document.body.style.background = '#cb8d4b'
        msg.innerHTML = `Bom Dia!! <br> Agora são ${hora}:AM`
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = '#d76d1b'
        msg.innerHTML = `Boa Tarde! <br>Agora são ${hora}:PM`
    }else{
        //Boa Noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#424d5a'
        msg.innerHTML = `Boa Noite <br> Agora são ${hora}:PM`
    }
}