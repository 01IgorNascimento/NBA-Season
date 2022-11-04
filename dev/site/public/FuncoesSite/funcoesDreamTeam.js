function MudarTime() {
}
function EscolherJogador(imagemAlvo) {
    var select = selJogadores.value
    jogadoresEscolhidos.push(select)

    if (imagemAlvo.src == "http://localhost:3333/img/quadra2.webp") {
        imagemAlvo.src = select
        AlterarTime()
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