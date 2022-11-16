var database = require("../database/config")
function listarTimePadrao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select timePadrao.nome as nome, max(jogador.overhall) as maiorOverhall, avg(jogador.overhall) as mediaOverhall, sum(jogador.salario) as salario,   timePadrao.imagemLogo as img from timePadrao
    join jogador on jogador.fkTimePadrao = timePadrao.id group by fkTimePadrao order by mediaOverhall desc;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUmTIme(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select usuario.nome as nome, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maiorOverhall, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome where usuario.id=${id};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function listarTimeUsuarios() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select usuario.nome as nomeUsuario, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaOverhall desc;  `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarTimeUsuariosSalario() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select usuario.nome as nomeUsuario, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by salario desc;  `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarTimePadraoSalario() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select timePadrao.nome as nome, max(jogador.overhall) as maiorOverhall, avg(jogador.overhall) as mediaOverhall, sum(jogador.salario) as salario,   timePadrao.imagemLogo as img from timePadrao
    join jogador on jogador.fkTimePadrao = timePadrao.id group by fkTimePadrao order by salario desc;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listarTimePadrao,
    listarTimeUsuarios,
    listarUmTIme,
    listarTimePadraoSalario,
    listarTimeUsuariosSalario
};


// criar propria função de criptogrfia