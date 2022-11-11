var idUsuario = 0
var jogadorRepetido = false

function EscolherJogador(imagemAlvo) {

    var select = selJogadores.value
    if (selJogadores.value == "") {
        alert("Selecione Um Jogador Antes de clicar")
    }
    else {
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

            var jogadorCadastrado
            for (var z = 0; z < urlJogadoresEscolhidos.length; z++) {
                for (var x = 0; x < listaTodosTimes.length; x++) {
                    for (var y = 0; y < listaTodosTimes[x].listaJogadores.length; y++) {
                        if (urlJogadoresEscolhidos[z] == listaTodosTimes[x].listaJogadores[y].imagem) {
                            jogadorCadastrado = listaTodosTimes[x].listaJogadores[y]
                        }
                    }
                }
            }
            jogadoresEscolhidos.push(jogadorCadastrado)
            cadastrarTimeCriado(jogadorCadastrado.nome, jogadorCadastrado.id)
            if (contadorJogadores == 5) {
                window.location = "http://localhost:3333/Dream%20Team.html#popup1"

                AtualizarModal()
            }
            else {
                AlterarTime()
            }
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
            <button class="botoesModal" id = "btnContinuar" onclick="cadastrarTimeCriado()"> Continuar</button>
            <button class="botoesModal" id="btnNovamente" onclick="fechar()">Jogar Novamente</button>
        `
}

function cadastrarTimeCriado(nomeJogador, idJogador) {
    var idUsuario = validarSessao()
    alert(idJogador)

    console.log(idUsuario)
    fetch("/timeCriado/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeJogadorServer: nomeJogador,
            IdJogadoServer: idJogador,
            idUsuarioServer: idUsuario

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            setTimeout(() => {
                window.location = "http://localhost:3333/analytics.html";
            }, "2000")

            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

