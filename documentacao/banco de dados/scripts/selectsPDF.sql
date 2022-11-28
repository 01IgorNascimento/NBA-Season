use nba_season;

select count(id) from usuario;

select nome, salario from jogador order by salario desc limit 5;
-- 96 é a combinação mais forte possível

select nome, salario from jogador order by salario desc limit 5;
-- 223.931.769 é a combinação mais cara possível

select usuario.nome as nome, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaOverhall desc limit 1;
-- time mais forte da liga

select usuario.nome as nome,  sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by salario desc limit 1;
-- time mais caro da liga


select usuario.nome as nome, avg(jogador.idade) as mediaIdade
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaIdade desc limit 1;     
    
select usuario.nome as nome, avg(jogador.idade) as mediaIdade
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaIdade limit 1;     
    
    select count(id) from usuario where dtCadastro <= "2022-11-27T20:25:11.000Z";
    
    select nome, overhall from jogador where overhall > 97;
    
    select * from usuario;
    
    -- 36% dos jogadores escolhidos  pelos usuários são pivôs (C), 22% são 
    
    select usuario.nome as nome, avg(jogador.idade) mediaIdade
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaIdade desc limit 1;
    
    

select usuario.nome as nome, avg(jogador.idade) mediaIdade
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaIdade desc limit 1;
    
    
select count(id) from usuario;

select * from timeCriado;



SELECT nomeJogador, Count(*) as QtdRepeticoes FROM timeCriado
GROUP BY fkJogador
HAVING Count(*) > 1
order by QtdRepeticoes desc;