select timePadrao.nome, jogador.nome from jogador join timePadrao on fkTimePadrao = timePadrao.id;

select * from jogador;
select * from timePadrao;
select * from timeCriado;
select * from usuario;

INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES (1, 3, 'Stephen Curry');
INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES (7, 1, 'Stephen Curry');

INSERT INTO timeCriado (fkUsuario, fkJogador, nomeJogador) VALUES ('3', '3', 'Michael Porter JR');

INSERT INTO jogador (nome, overhall, imagemRosto, imagem, salario, idade, fkTimePadrao, id) VALUES
('Draymon Green', 83, 'img/times/warriors/greenRosto.webp', 'img/times/warriors/green.jpg', '24026712', '32', 2,'9' );

