    use nba_season;






select usuario.nome as nomeUsuario, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaOverhall desc ; 
    
    
    
    
    
    
    
select usuario.nome as nome, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaOverhall desc; 
    
    
    select usuario.nome, jogador.nome, jogador.overhall, jogador.salario from usuario join timeCriado on usuario.id = fkUsuario join jogador on jogador.id = fkJogador;
    
    select * from jogador;
    
    
    
	select timePadrao.nome as nome, max(jogador.overhall) as maiorOverhall, avg(jogador.overhall) as mediaOverhall, sum(jogador.salario) as salario,   timePadrao.imagemLogo as img from timePadrao
    join jogador on jogador.fkTimePadrao = timePadrao.id group by fkTimePadrao order by mediaOverhall desc;
	
select usuario.nome as nome, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maiorOverhall, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome where usuario.id=1000;
      

select usuario.nome as nomeUsuario, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by mediaOverhall desc; 
    
    select usuario.nome as nomeUsuario, avg(jogador.overhall) as mediaOverhall, max(jogador.overhall) as maior, sum(jogador.salario) as salario, usuario.id
    from usuario join timeCriado on fkUSuario = usuario.id
    join jogador on timeCriado.nomeJogador = jogador.nome group by usuario.nome order by salario desc; 

select * from usuario;

update usuario set nome = "Lucas Ribeiro"  where id =1005;

-- Atual
select * from timePadrao;
select * from jogador;

