create database myFitness_db;
use myFitness_db;

create table personalGoals(
id integer not null auto_increment primary key,

);

create table joinTheChallenge(
id integer not null auto_increment primary key,
challenger_first_name varchar(30) not null,
challenger_last_name varchar(30) not null,
challenger_email varchar(30) not null,
challenger_password varchar(11),
challenger_password_verify varchar(11)
);

create table contactUs(
id integer not null auto_increment primary key,
contacter_first_name varchar(30) not null,
contacter_last_name varchar(30) not null,
contacter_email varchar (30) not null,
contacter_phone integer(11),
contacter_message varchar(100),
);


