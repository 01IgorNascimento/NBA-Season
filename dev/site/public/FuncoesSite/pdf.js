

var usuarioDaVez

fetch("/pdfs/listarUmUsuario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idServer: sessionStorage.ID_USUARIO
    })
})
    .then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                //console.log("Dados recebidos: ", JSON.stringify(resposta));

                for (let i = 0; i < resposta.length; i++) {
                    //console.log(resposta[i])
                    usuarioDaVez = resposta[i];
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
    });





var ordermCadastro

function gerarPDF() {
    fetch("/pdfs/listarOrdermCriacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            dtCadastroServer: usuarioDaVez.dtCadastro
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        ordermCadastro = resposta[i];
                        console.log(ordermCadastro.cadastros)

                        maiorOverhall()
                    }
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
}
var stringMaior = ""
var arrayMaiores = []
var contMaiores = 0
var stringAuxiliar = ""
function maiorOverhall() {
    console.log(usuarioDaVez.maior)
    fetch("/pdfs/listarMaiores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            maiorServer: usuarioDaVez.maior
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    stringMaior = "0 jogadores possuem o overall maior que o seu melhor jogador, <br> porque Giannis Antetokounmpo esta no seu time"
                    Dados3()
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        arrayMaiores.push(resposta[i].nome)
                        console.log(arrayMaiores)
                    }
                    for (var x = 0; x < arrayMaiores.length; x++) {
                        if (x < 3) {
                            stringAuxiliar += `${arrayMaiores[x]}; `
                        }
                        contMaiores++
                    }
                    if (arrayMaiores.length == 1) {
                        stringMaior = `apenas ${contMaiores} jogador possui o overall maior que o seu melhor jogador: <br> ${stringAuxiliar}`
                    }
                    else {
                        stringMaior = `${contMaiores} jogadores possuem o overall maior que o seu melhor jogador: <br> ${stringAuxiliar} e etc...`
                    }
                    Dados3()
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
}
var axPontosMediaOverhall = 0
var axPontosSalario = 0
var string3Total = ""
var string3Overhall = ""
var string3Dinheiro = ""
function Dados3() {
    var usuarioMediaOverhall = Number(usuarioDaVez.mediaOverhall).toFixed(0)
    var usuarioSalario = Number(usuarioDaVez.salario)



    if (usuarioMediaOverhall < 96) {
        axPontosMediaOverhall = 96 - usuarioMediaOverhall
        string3Overhall = `Seu time tem ${axPontosMediaOverhall} pontos de m??dia de overall a menos que a combina????o <br>
        de jogadores mais forte poss??vel,`
    }
    if (usuarioMediaOverhall == 96) {
        axPontosMediaOverhall = 96 - usuarioMediaOverhall
        string3Overhall = `Seu time tem a combina????o mais forte e conseguiu atingir a melhor m??dia de overall poss??vel,`
    }
    if (usuarioSalario == 223931769) {

        string3Dinheiro = ` e atingiu o m??ximo de sal??rio que uma equipe pode ter`
    }
    if (usuarioSalario < 223931769) {
        axPontosSalario = 223931769 - usuarioSalario
        axPontosSalario = axPontosSalario.toLocaleString('en-gb', { style: 'currency', currency: 'USD' });
        string3Dinheiro = ` e ?? ${axPontosSalario} mais barato que a <br> combina????o mais cara de jogadores`
    }
    string3Total = string3Overhall + string3Dinheiro
    Dados4()
}
var nomeUsuarioMaisForte = ""
function Dados4() {
    fetch("/pdfs/listarTimeMaisForte", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    //console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var nome = resposta[i].nome.toString()
                        nome = nome.split(' ').slice(0, 2).join(' ')
                        //a primeira parte o split, ele corta todos os " " que estiver entre as palavras
                        //a segunda parte o slice, define apartir de qual palavra que no caso ?? o 0, e at?? qual palavra, que no caso ?? o 2
                        //a terceira parte ?? o join, define qual caractere substituira a virgula
                        console.log(typeof (nome))
                        console.log(nome)
                        nomeUsuarioMaisForte = `O Usu??rio que criou o time mais forte da liga foi: ${nome}, com <br>  uma incr??vel m??dia de ${Number(resposta[i].mediaOverhall).toFixed()} de overall`
                    }
                    Dados5pt1()
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });

}

var stringMenorIdade = ""

function Dados5pt1() {
    fetch("/pdfs/menorIdade", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    //console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        console.log(resposta[i])
                        stringMenorIdade = `O usu??rio que montou o time mais novo foi o: ${resposta[i].nome.split(' ').slice(0, 2).join(' ')},<br> m??dia de ${Number(resposta[i].mediaIdade).toFixed(0)} anos, `
                    }
                    Dados5pt2()
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
}
var stringMaiorIdade = ""

function Dados5pt2() {
    fetch("/pdfs/maiorIdade", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    //console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        console.log(resposta[i])
                        stringMenorIdade += ` e quem criou o time mais velho foi o ${resposta[i].nome.split(' ').slice(0, 2).join(' ')},<br> m??dia de ${Number(resposta[i].mediaIdade).toFixed(0)} anos`
                    }
                    Dados6()
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
}
var jogadorMaisEscolhido = ""
function Dados6() {
    fetch("/pdfs/jogadorMaisEscolhido", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    //console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        console.log(resposta[i])
                        jogadorMaisEscolhido = `O Jogador que mais foi escolhido pelos usu??rios, foi: ${resposta[i].nomeJogador}, ${resposta[i].QtdRepeticoes}<br> usu??rios escolheram ele para seus times`
                    }
                    AtualizarDados()
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });


}




function AtualizarDados() {
    var stringNomeUsuario = sessionStorage.NOME_USUARIO
    stringNomeUsuario = stringNomeUsuario.toUpperCase()
    stringNomeUsuario = stringNomeUsuario.split(' ').slice(0, 2).join(' ');
    //a primeira parte o split, ele corta todos os " " que estiver entre as palavras
    //a segunda parte o slice, define apartir de qual palavra que no caso ?? o 0, e at?? qual palavra, que no caso ?? o 2
    //a terceira parte ?? o join, define qual caractere substituira a virgula




    document.querySelector('#titulo').innerHTML = stringNomeUsuario
    document.querySelector('#dados1').innerHTML = `<b> -</b> O seu time foi o ${ordermCadastro.cadastros}?? a ser criado nesse site`
    document.querySelector('#dados2').innerHTML = `<b> -</b> ${stringMaior} `
    document.querySelector('#dados3').innerHTML = `<b> -</b> ${string3Total} `
    document.querySelector('#dados4').innerHTML = `<b> -</b> ${nomeUsuarioMaisForte} `
    document.querySelector('#dados5').innerHTML = `<b> -</b> ${jogadorMaisEscolhido} `
    document.querySelector('#dados6').innerHTML = `<b> -</b> ${stringMenorIdade} `

    var h1 = document.querySelector('#titulo')
    var caixa = document.querySelector('#caixa')
    var listaUsuario1 = document.querySelector('#listaDadosUsuario1')
    var listaUsuario2 = document.querySelector('#listaDadosUsuario2')
    var sub1 = document.querySelector('#subTitulo1')
    var sub2 = document.querySelector('#subTitulo2')



    var doc = new jsPDF()
    doc.setFillColor(0, 0, 0)
    doc.rect(-100, -10, 400, 60, 'F')
    doc.setTextColor(255, 255, 255)
    doc.fromHTML(h1, 75, 18)
    doc.fromHTML(sub1, 55, 65)
    doc.fromHTML(sub2, 55, 175)
    doc.fromHTML(listaUsuario1, 5, 90)
    doc.fromHTML(listaUsuario2, 5, 195)
    doc.addImage(teste, 10, 5, 60, 40)
    doc.addImage(userImg64, 135, 60, 20, 20)
    doc.addImage(logoNba64, 138, 170, 20, 20)
    doc.save('analytics.pdf')
}