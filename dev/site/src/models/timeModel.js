var database = require("../database/config")
var timeCadastrado = false

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarTime(nomeJogador1, nomeJogador2, nomeJogador3, nomeJogador4, nomeJogador5, idUsuario) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO timeCriado (nomeJogador1, nomeJogador2, nomeJogador3, nomeJogador4, nomeJogador5, fkUsuario) VALUES ('${nomeJogador1}', '${nomeJogador2}', '${nomeJogador3}', '${nomeJogador4}', '${nomeJogador5}', '${idUsuario}');
    `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarTime,
};