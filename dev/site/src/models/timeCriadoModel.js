var database = require("../database/config")
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeJogador, idJogador, idUsuario,) {
    var instrucao = `
        INSERT INTO timeCriado (nomeJogador, fkJogador, fkUsuario) VALUES ('${nomeJogador}', '${idJogador}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function excluir(idUsuario) {
    var instrucao = `
    delete from timeCriado where fkUsuario =${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    excluir,
};