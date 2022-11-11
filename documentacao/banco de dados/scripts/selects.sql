

select timePadrao.nome, jogador.nome from jogador join timePadrao on fkTimePadrao = timePadrao.id;

select * from jogador;
select * from timePadrao;
select * from timeCriado;
select * from usuario;

INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES (1, 3, 'Stephen Curry');


