function MudarTime() {
}
function EscolherJogador(imagemAlvo) {
    var select = selJogadores.value
    for (var x = 0; x < jogadoresEscolhidos.length; x++) {
        if (select == jogadoresEscolhidos[x]) {
            alert("Andre Wiggns ja está no seu time")
            return
        }

    }
    if (imagemAlvo.src == "http://localhost:3333/img/quadra2.webp") {
        imagemAlvo.src = select
        jogadoresEscolhidos.push(select)
        contadorJogadores++
        if (contadorJogadores == 1) {
            window.location = "http://localhost:3333/Dream%20Team.html#popup1"
        }
        else {
            AlterarTime()
        }

    }


}
function AlterarTime() {
    var ax_cont = Math.floor(Math.random() * listaTodosTimes.length)
    for (var x = 0; x < listaTodosTimes.length; x++) {
        if (x == ax_cont) {
            timeEscolhido = listaTodosTimes[x]
        }
    }
    const select = document.querySelector('#selJogadores')
    select.options.length = 0;

    for (var x = 0; x < timeEscolhido.listaJogadores.length; x++) {
        var stringSelect = `${timeEscolhido.listaJogadores[x].posicao} -  ${timeEscolhido.listaJogadores[x].nome}: ${timeEscolhido.listaJogadores[x].overhall}`
        select.options[select.options.length] = new Option(`${stringSelect}`, `${timeEscolhido.listaJogadores[x].imagem}`);
    }

    document.getElementById('logoTime').src = `${timeEscolhido.logo}`
}
AlterarTime()