create database  moviedbsql;
use moviedbsql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'codingroot1!';

create table UserAccounts(
FirstName varchar(50),
LastName varchar(50),
Username varchar(50) Primary Key,
Password varchar(50),
E_mail varchar(255)
);

select * from UserAccounts;
drop table UserAccounts;