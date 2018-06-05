DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER(6),
    PRIMARY KEY (id)
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Book", "Books", 12.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Orange Book", "Books", 14.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yellow Book", "Books", 24.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Green Book", "Books", 3.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Book", "Books", 52.99, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Purple Book", "Books", 23.99, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("White Book", "Books", 75.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grey Book", "Books", 43.99, 73);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Book", "Books", 38.99, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brown Book", "Books", 24.99, 61);

SELECT * FROM products;