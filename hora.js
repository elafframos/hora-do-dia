function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}h.`
    if (hora >= 0 && hora < 12) {

        //GOOD MORNING!
        img.src = 'manha.png'
        document.body.style.background = '#FFD700!'

    } else if (hora >= 12 && hora < 18) {

        //GOOD AFTERNOON!
        img.src = 'tarde.png'
        document.body.style.background = '#FF8C00!'

    } else {

        //GOOD NITHG!
        img.src = 'noite.png'
        document.body.style.background = '#191970!'

    }
}
