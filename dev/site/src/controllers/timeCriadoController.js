var timeCriadoModel = require("../models/timeCriadoModel");
console.log("entramos na controller")
var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA timeController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    timeCriadoModel.listar()
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



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeJogador = req.body.nomeJogadorServer;
    var idJogador = req.body.IdJogadoServer;
    var idUsuario = req.body.idUsuarioServer

    console.log(nomeJogador);
    console.log(idJogador);
    console.log(idUsuario);
    // Faça as validações dos valores


    timeCriadoModel.cadastrar(idJogador, idJogador, nomeJogador)
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
    cadastrar,
    listar,
    testar
}