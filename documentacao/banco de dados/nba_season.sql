create database NBA_SEASON;
use nba_season;

drop database Nba_season;


create table jogador(
	id int primary key auto_increment,
    nome varchar(125),
	idade int,
    salario double,
    overhall int,
    imagemRosto varchar(100),
    imagem varchar(100),
    fkTimePadrao int,
    fkTimeCriado int
);

alter table jogador add constraint ctJogador
foreign key(fkTimePadrao) references timePAdrao (idJogador);
alter table jogador add constraint ctJogador2
foreign key(fkTimeCriado) references timeCriado (id);

create table timePadrao(
	idJogador int primary key auto_increment,
    nome varchar (125),
    imagemLogo varchar(100)
);

create table timeCriado(
	id int primary key auto_increment,
	nomeJogador1 varchar(125),
    nomeJogador2 varchar(125),
    nomeJogador3 varchar(125),
    nomeJogador4 varchar(125),
    nomeJogador5 varchar(125),
    fkUsuario int 
);

alter table timeCriado add constraint ctTimeCriado
foreign key(fkUsuario)  references usuario (id);


create table usuario(
	id int primary key auto_increment,
    nome varchar(125),
    email varchar(125),
    senha varchar(125)
);