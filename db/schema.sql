CREATE DATABASE myFitness_db;
use myFitness_db;





CREATE TABLE userinfo (
	id INTEGER NOT NULL auto_increment PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name varchar (50) not null,
    email varchar(50) not null,
    zipcode integer(11) not null
);


