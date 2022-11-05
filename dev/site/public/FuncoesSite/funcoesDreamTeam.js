var jogadorRepetido = false
function MudarTime() {
}
function EscolherJogador(imagemAlvo) {
    var select = selJogadores.value
    for (var x = 0; x < urlJogadoresEscolhidos.length; x++) {
        if (select == urlJogadoresEscolhidos[x]) {
            jogadorRepetido = true
            alert("Andre Wiggns ja está no seu time")
            return
        }
        else {
            jogadorRepetido = false
        }

    }
    if (imagemAlvo.src == "http://localhost:3333/img/quadra2.webp" && jogadorRepetido == false) {
        imagemAlvo.src = select
        urlJogadoresEscolhidos.push(select)
        contadorJogadores++
        if (contadorJogadores == 5) {
            for (var z = 0; z < urlJogadoresEscolhidos.length; z++) {
                for (var x = 0; x < listaTodosTimes.length; x++) {
                    for (var y = 0; y < listaTodosTimes[x].listaJogadores.length; y++) {
                        if (urlJogadoresEscolhidos[z] == listaTodosTimes[x].listaJogadores[y].imagem) {
                            jogadoresEscolhidos.push(listaTodosTimes[x].listaJogadores[y])
                        }
                    }
                }
            }
            window.location = "http://localhost:3333/Dream%20Team.html#popup1"
            AtualizarModal()
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


function AtualizarModal() {
    for (var x = 0; x < jogadoresEscolhidos.length; x++) {
        var salario = jogadoresEscolhidos[x].salario
        console.log(jogadoresEscolhidos[x].nome + " " + salario)
        salario = salario.toLocaleString('en-gb', { style: 'currency', currency: 'USD' });
        caixaModal.innerHTML += `
        <div class="jogadorModal">
    <div>
        
        <img src="${jogadoresEscolhidos[x].imagemRosto}" alt="" srcset="" class="imagemRosto">
        <ul class="ulModal">
            <li><b>Nome:</b> ${jogadoresEscolhidos[x].nome}</li>
            <li><b>Idade:</b> ${jogadoresEscolhidos[x].idade}</li>
            <li><b>Salário Anual:</b> <br> ${salario}</li>
            <li><b>Posição:</b> ${jogadoresEscolhidos[x].posicao}</li >
            <li><b>Overall:</b> ${jogadoresEscolhidos[x].overhall}</li>
        </ul >
    </div >
</div >
            `
    }
    caixaModal.innerHTML += `
            <button class="botoesModal" id = "btnContinuar"> Continuar</button>
            <button class="botoesModal" id="btnNovamente" onclick="fechar()">Jogar Novamente</button>
        `
}