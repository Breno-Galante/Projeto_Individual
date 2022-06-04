Create database league;
use league;

create table musicas (
id_musica int primary key auto_increment,
nome_musica varchar (60)
);

create table usuario (
id_user int primary key auto_increment,
nome varchar (45),
nome_invocador varchar (45),
email varchar(45),
cep char(8),
estado char(2),
rota char (10),
elo varchar (13),
divisao char (5),
senha varchar(30),
criacao datetime default current_timestamp
);

create table votos (
fk_user int primary key,
foreign key (fk_user) references usuario (id_user),
musica_votada int,
foreign key (musica_votada) references musicas (id_musica),
dt_voto datetime default current_timestamp
);

Insert into musicas (nome_musica) values 
('Warriors'),
('Legends Never Die'),
('Enemy'),
('More'),
('Rise'),
('Pop Stars');

select * from usuario;
select * from votos;

