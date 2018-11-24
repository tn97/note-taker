-- DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;
USE notes_db;


CREATE TABLE notes
(
id int NOT NULL AUTO_INCREMENT,
note varchar(255) NOT NULL,
PRIMARY KEY (id)
);


INSERT INTO notes (note) VALUES ('Application');
INSERT INTO notes (note) VALUES ('TesterTest');
INSERT INTO notes (note) VALUES ('If you can hear "pong"');
INSERT INTO notes (note) VALUES ('PING!');