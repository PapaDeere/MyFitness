create database myFitness_db;
use myFitness_db;





create table contactUs(
id integer not null auto_increment primary key,
contacter_first_name varchar(30) not null,
contacter_last_name varchar(30) not null,
contacter_email varchar (30) not null,
contacter_phone integer(25),
contacter_message varchar(100)
);


