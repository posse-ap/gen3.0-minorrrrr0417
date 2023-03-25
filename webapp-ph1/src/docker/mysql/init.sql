DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
USE posse;


DROP TABLE IF EXISTS StudyTime;
CREATE TABLE IF NOT EXISTS StudyTime(
  id int,
  StudyHour INT,
  Day DATE,
  Contents VARCHAR(32),
  Languages VARCHAR(32) 
);

INSERT INTO StudyTime (id, StudyHour, Day, Contents, Languages)VALUES 
(NULL, 3, '2023-03-01', 1, 5),
(NULL, 1, '2023-03-02', 2, 7),
(NULL, 13, '2023-03-03', 2, 7),
(NULL, 14, '2023-03-04', 1, 1),
(NULL, 15, '2023-03-05', 3, 3),
(NULL, 2, '2023-03-06', 2, 2),
(NULL, 6, '2023-03-07', 2, 5),
(NULL, 8, '2023-03-08', 1, 5),
(NULL, 3, '2023-03-09', 3, 1),
(NULL, 4, '2023-03-10', 2, 2),
(NULL, 3, '2023-03-11', 2, 6),
(NULL, 2, '2023-03-12', 3, 6),
(NULL, 10, '2023-03-13', 1, 8),
(NULL, 0, '2023-03-14', 3, 2),
(NULL, 6, '2023-03-15', 1, 4),
(NULL, 15, '2023-03-16', 2, 5),
(NULL, 4, '2023-03-17', 2, 6),
(NULL, 0, '2023-03-18', 3, 1),
(NULL, 0, '2023-03-19', 2, 6),
(NULL, 0, '2023-03-20', 1, 6),
(NULL, 6, '2023-03-21', 3, 8),
(NULL, 4, '2023-03-22', 3, 1),
(NULL, 8, '2023-03-23', 2, 2),
(NULL, 12, '2023-03-24', 2, 3),
(NULL, 12, '2023-03-25', 1, 3),
(NULL, 20, '2023-03-26', 2, 1),
(NULL, 4, '2023-03-27', 3, 6),
(NULL, 6, '2023-03-28', 3, 8),
(NULL, 10, '2023-03-29', 3, 8),
(NULL, 8, '2023-03-30', 3, 8),
(NULL, 16, '2023-03-31', 3, 8);
