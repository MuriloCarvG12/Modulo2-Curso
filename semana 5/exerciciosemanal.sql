create table Clientes
	(
		id serial primary key,
		nome varchar(50),
		cidade varchar(50),
		email varchar(50) unique
	)

insert into clientes(nome, cidade, email) values ('Cleiton', 'Los Angeles', CleitonCoat@Email.com')

insert into clientes(nome, cidade, email) values ('Renan', 'Moscow', 'Renan@Email.com')

insert into clientes(nome, cidade, email) values ('Teste', 'Sydney', 'Teste@Email.com')

insert into clientes(nome, cidade, email) values ('Alfredo', 'California', 'Alfredo@Email.com')

insert into clientes(nome, cidade, email) values ('Bart', 'Springfield', 'Bart@Email.com')

create table produtos 
(
	 id serial primary key,
	 nome varchar(50) unique,
	 quantidade int 
)

insert into produtos (nome, quantidade) values ('bolacha', 10)
insert into produtos (nome, quantidade) values ('biscoito', 10)
insert into produtos (nome, quantidade) values ('cafe', 10)
insert into produtos (nome, quantidade) values ('achocolatado', 10)
insert into produtos (nome, quantidade) values ('cha', 10)

create table pedidos 
	(
		 id serial primary key,
		 cliente_id integer references clientes(id),
		 data date     
	)

insert into pedidos(cliente_id, data) values (1, '2024-12-15')
insert into pedidos(cliente_id, data) values (2, '2015-3-17')
insert into pedidos(cliente_id, data) values (3, '2013-11-9')
insert into pedidos(cliente_id, data) values (4, '2006-4-3')
insert into pedidos(cliente_id, data) values (5, '2002-9-13')