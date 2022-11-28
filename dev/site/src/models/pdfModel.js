var database = require("../database/config")
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

function listarUmUsuario(idUsuario) {
    var instrucao = `
    select usuario.nome as nome, usuario.dtCadastro, avg(jogador.idade), avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome  where usuario.id =${idUsuario} group by usuario.nome order by mediaOverhall desc; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function menorIdade() {
    var instrucao = `
    select usuario.nome as nome, avg(jogador.idade) mediaIdade
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaIdade asc limit 1;
    `;
    return database.executar(instrucao);
}
function maiorIdade() {
    var instrucao = `
    select usuario.nome as nome, avg(jogador.idade) mediaIdade
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaIdade desc limit 1;
    `;
    return database.executar(instrucao);
}

function listarOrdermCriacao(dtCadastro) {
    var instrucao = `
    select count(id) as cadastros from usuario where dtCadastro <="${dtCadastro};"`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarMaiores(maior) {
    var instrucao = `
    select nome, overhall from jogador where overhall > ${maior};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarTimeMaisForte() {
    var instrucao = `
    select usuario.nome as nome,  avg(jogador.overhall)
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by salario desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function jogadorMaisEscolhido() {
    var instrucao = `
    SELECT nomeJogador, Count(*) as QtdRepeticoes FROM timeCriado
    GROUP BY nomeJogador
    HAVING Count(*) > 1
    order by QtdRepeticoes desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarUmUsuario,
    listarOrdermCriacao,
    listarMaiores,
    listarTimeMaisForte,
    menorIdade,
    maiorIdade,
    jogadorMaisEscolhido,
};


