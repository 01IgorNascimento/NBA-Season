var database = require("../database/config")
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(fkUsuario, fkJogador, nomeJogador,) {
    console.log(fkUsuario)
    console.log(fkJogador)
    console.log(nomeJogador)
    var instrucao = `
        INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES ('${sessionStorage.ID_USUARIO}', '${fkJogador}', '${nomeJogador}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
};