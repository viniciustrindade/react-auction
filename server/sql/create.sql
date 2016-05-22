create database if not exists auction;

CREATE TABLE auctions (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	code VARCHAR(255)
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	balance INT NOT NULL
);

CREATE TABLE lots (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	price VARCHAR(255),
    auction_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (auction_id)
        references auctions(id),
    FOREIGN KEY (user_id)
        references users(id)
);

insert into auctions(name, code) values ('League of Stars', 'los');
insert into users (name, balance) values ('Juriy', 123);