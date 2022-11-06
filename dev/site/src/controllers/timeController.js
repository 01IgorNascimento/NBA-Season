var timeModel = require("../models/timeModel");
console.log("entramos na controller")
var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA timeController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    timeModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function cadastrarTime(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeJogador1 = req.body.nomeJogador1Server;
    var nomeJogador2 = req.body.nomeJogador2Server;
    var nomeJogador3 = req.body.nomeJogador3Server;
    var nomeJogador4 = req.body.nomeJogador4Server;
    var nomeJogador5 = req.body.nomeJogador5Server;
    var idUsuario = req.body.idUsuarioServer;
    // Faça as validações dos valores


    timeModel.cadastrarTime(nomeJogador1, nomeJogador2, nomeJogador3, nomeJogador4, nomeJogador5, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    cadastrarTime,
    listar,
    testar
}