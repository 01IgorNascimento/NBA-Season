select timePadrao.nome, jogador.nome from jogador join timePadrao on fkTimePadrao = timePadrao.id;

select * from jogador;
select * from timePadrao;
select * from timeCriado;
select * from usuario;

delete from timeCriado where fkUsuario =1000;

INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES (1, 3, 'Stephen Curry');
INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES (7, 1, 'Stephen Curry');

INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES ('3', '3', 'Michael Porter JR');