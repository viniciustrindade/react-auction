create database if not exists auction;

DROP TABLE IF EXISTS auctions;
CREATE TABLE auctions (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	code VARCHAR(255)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	description VARCHAR(2000),
	img_small VARCHAR(255),
	img_big VARCHAR(255),
	balance INT NOT NULL
);

DROP TABLE IF EXISTS lots;
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

DROP TABLE IF EXISTS bids;
CREATE TABLE bids (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	lot_id INT NOT NULL,
	bidder_id INT NOT NULL,
	price INT NOT NULL,
	bid_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lot_id)
        references lots(id),
    FOREIGN KEY (bidder_id)
        references users(id)
);


--------------
-- Kill all
--------------
DROP TABLE bids;
DROP TABLE lots;
DROP TABLE auctions;
DROP TABLE users;

--------------
-- Initial data
--------------
INSERT INTO users
    (name, description, img_small, img_big, balance)
VALUES
    ('Juriy', 'Nice User', 'img/123.jpg', 'img/321.jpg', 500);

insert into auctions(name, code) values ('League of Stars', 'los');

INSERT INTO lots
    (name, description, price, image_url, auction_id, seller_id)
VALUES
    ('Dummy Lot', 'This is my dummy lot', 100, 'uasd1.jpg', 1, 1);

INSERT INTO bids (lot_id, bidder_id, price) VALUES (1, 1, 200);


