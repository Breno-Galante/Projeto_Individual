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

delete from votos where fk_user = 1;

select count(rota) as qtd_rota , rota from usuario group by rota;

select M.nome_musica , count(V.musica_votada) as 'musica_votada' from votos as V join musicas as M on V.musica_votada = M.id_musica group by nome_musica;

insert into usuario (nome, nome_invocador , rota , elo , senha) values
('Dias' , 'É o Dias' , 'adc' , 'Prata' , 'Dias@'),
('Nicolas' , 'É o Nicolas' , 'jungle' , 'Ferro' , 'Nicolas@'),
('Chinxila' , 'É o Chinxas' , 'sup' , 'bronze' , 'Chinxas@'),
('Rodrigo' , 'É o Rodrigao' , 'top' , 'prata' , 'Rodrigo@'),
('Joao Pedro' , 'Jaypy' , 'jungle' , 'platina' , 'Joaopedro@');


insert into votos (fk_user , musica_votada) values 
(1 , 4),
(2 , 4),
(3 , 2),
(4 , 3),
(5 , 6);

SELECT U.* , M.nome_musica FROM usuario as U left join votos as V on fk_user = id_user
left join musicas as M on musica_votada = id_musica WHERE nome_invocador = '' AND senha = '';



