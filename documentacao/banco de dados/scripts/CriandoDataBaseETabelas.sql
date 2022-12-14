create database NBA_SEASON;
use nba_season;

 drop database Nba_season;
 
create table jogador(
	id int primary key,
    nome varchar(125),
	idade int,
    salario double,
    posicao varchar(15),
    overhall int,
    imagemRosto varchar(100),
    imagem varchar(100),
    fkTimePadrao int
);

create table timePadrao(
	id int primary key ,
    nome varchar (125),
    imagemLogo varchar(100)
);

create table usuario(
	id int primary key auto_increment,
    nome varchar(125),
    email varchar(125),
    senha varchar(125),
    dtCadastro datetime
)auto_increment=1000;

create table timeCriado(
	fkJogador int,
    fkUsuario int,
	nomeJogador varchar(125),
    foreign key (fkUsuario) references usuario(id),
	foreign key (fkJogador) references jogador(id),
    primary key (fkUsuario, fkJogador),
    dtCriacao datetime default current_timestamp
);


alter table jogador add constraint ctJogador
foreign key(fkTimePadrao) references timePAdrao (id);
select * from usuario;