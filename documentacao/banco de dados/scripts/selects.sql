   use nba_season;
   select usuario.nome, avg(jogador.overhall) as media, max(jogador.overhall) as maior, sum(jogador.salario) as somaSalario
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome;
    
    select * from usuario join timeCriado on usuario.id = fkUsuario;
    
    select timePadrao.nome, jogador.nome as jogadorNome, jogador.overhall, timePadrao.imagemLogo as img, jogador.salario as salario from timePadrao
    join jogador on jogador.fkTimePadrao = timePadrao.id;



-- Atual
select * from timePadrao;
select * from jogador;
-- O que eu quero 1:
select * from usuario join timeCriado on usuario.id = fkUsuario;

-- O que eu quero 2:
select * from usuario join timeCriado on usuario.id = fkUsuario;

-- o que eu quero 3
select usuario.nome, jogador.nome, jogador.overhall, jogador.salario from usuario join timeCriado on usuario.id = fkUsuario 
join jogador on jogador.nome =timecriado.nomeJogador order by(usuario.nome);