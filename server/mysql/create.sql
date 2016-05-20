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
    auction_id INT NOT NULL
        ADD CONSTRAINT fk_auction
        FOREIGN KEY (auction_id)
        references auctions(id),
    user_id INT NOT NULL
        ADD CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        references users(id)
);
