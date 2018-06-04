CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10, 4) NOT NULL,
    stock_quantity INTEGER(6),
    PRIMARY KEY (id)
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();
    