create database NBA_SEASON;
use nba_season;
 -- drop database Nba_season;
create table jogador(
	id int primary key auto_increment,
    nome varchar(125),
	idade int,
    salario double,
    overhall int,
    imagemRosto varchar(100),
    imagem varchar(100),
    fkTimePadrao int
);

alter table jogador add constraint ctJogador
foreign key(fkTimePadrao) references timePAdrao (idJogador);

create table timePadrao(
	idJogador int primary key auto_increment,
    nome varchar (125),
    imagemLogo varchar(100)
);

create table usuario(
	id int primary key auto_increment,
    nome varchar(125),
    email varchar(125),
    senha varchar(125)
);

create table timeCriado(
	fkJogador int,
    fkUsuario int,
	nomeJogador varchar(125),
    foreign key (fkUsuario) references usuario(id),
	foreign key (fkJogador) references jogador(id),
    primary key (fkUsuario, fkJogador),
    dtCriacao datetime default current_timestamp
);
