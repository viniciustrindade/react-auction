create database if not exists auction;

DROP TABLE IF NOT EXISTS auctions;
CREATE TABLE auctions (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	code VARCHAR(255)
);

DROP TABLE IF NOT EXISTS users;
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	balance INT NOT NULL
);

DROP TABLE IF NOT EXISTS lots;
CREATE TABLE lots (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	description VARCHAR(1500),
	price INT NOT NULL,
    image_url VARCHAR(255),
    auction_id INT NOT NULL,
    seller_id INT NOT NULL,
    FOREIGN KEY (auction_id)
        references auctions(id),
    FOREIGN KEY (seller_id)
        references users(id)
);

--------------
-- Initial data
--------------
insert into auctions(name, code) values ('League of Stars', 'los');
insert into users (name, balance) values ('Juriy', 123);

INSERT INTO lots
    (name, description, price, image_url, auction_id, seller_id)
VALUES
    ('Dummy Lot', 'This is my dummy lot', 100, 'uasd1.jpg', 1, 1);