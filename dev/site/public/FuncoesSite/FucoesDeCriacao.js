

function CadastraTime(time) {


    fetch("/times/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeTimeServer: time.nome,
            logoTimeServer: time.logo,
            idTimeServer: time.id
        })
    }).then(function (resposta) {


        if (resposta.ok) {

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function verificar() {

    fetch("/times/verificar")
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    for (var x = 0; x < listaTodosTimes.length; x++) {
                        console.log(listaTodosTimes[x].nome)
                        CadastraTime(listaTodosTimes[x])

                    }

                    for (var x = 0; x < listaTodosTimes.length; x++) {
                        for (var y = 0; y < listaTodosTimes[x].listaJogadores.length; y++) {
                            CadastrarJogador(listaTodosTimes[x].listaJogadores[y])
                        }
                    }

                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {



                });
            } else {

                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.log(resposta);
        });
}



function CadastrarJogador(jogador) {
    fetch("/jogadores/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: jogador.nome,
            overhallServer: jogador.overhall,
            imgRostoServer: jogador.imagemRosto,
            imgServer: jogador.imagem,
            salarioServer: jogador.salario,
            idadeServer: jogador.idade,
            fkServer: jogador.fkTime,
            idServer: jogador.id
        })
    }).then(function (resposta) {


        if (resposta.ok) {

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}
verificar()