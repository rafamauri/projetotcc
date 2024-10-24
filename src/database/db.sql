DROP DATABASE IF NOT EXISTS login_register_systems;

CREATE DATABASE IF NOT EXISTS login_register_systems;

USE login_register_systems

CREATE TABLE users(
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    user_name VARCHAR(120)NOT NULL,
    user_email VARCHAR(120)NOT NULL,
    user_password VARCHAR(225)NOT NULL,
    user_date DATETIME NOT NULL
);