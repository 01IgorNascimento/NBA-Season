var jogadorModel = require("../models/jogadorModel");
console.log("entramos na controller")
var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA timeController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    jogadorModel.listar()
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
    var nomeJogador = req.body.nomeServer;
    var overhall = req.body.overhallServer;
    var imgRosto = req.body.imgRostoServer
    var img = req.body.imgServer
    var salario = req.body.salarioServer
    var idade = req.body.idadeServer
    var fk = req.body.fkServer
    var id = req.body.idServer
    var posicao = req.body.posicaoServer


    jogadorModel.cadastrar(nomeJogador, overhall, imgRosto, img, salario, idade, fk, id, posicao)
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