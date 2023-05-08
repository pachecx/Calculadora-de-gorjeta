function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = 10

    msg.innerHTML = `Agora são ${hora} horas. `

    if(hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = 'orange'
    }

    else if(hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'blue'
    }

    else {
        img.src = 'noite.jpg'
        document.body.style.background = 'black'
    }

}
