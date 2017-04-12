BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  user_id           SERIAL          PRIMARY KEY,
  github_id         INTEGER        NOT NULL,
  username          VARCHAR(100)      NOT NULL,
  avatar_url        VARCHAR(2083)
);

CREATE TABLE posts (
  post_id         SERIAL          PRIMARY KEY,
  title           VARCHAR(50)     NOT NULL,
  body            VARCHAR(5000)   NOT NULL,
  date            DATE            NOT NULL,
  user_id         INTEGER         REFERENCES users(user_id)
);

-- 1 TO MANY
INSERT INTO users(github_id, username, avatar_url) VALUES
(18493541, 'antoniotrkdz', 'https://avatars2.githubusercontent.com/u/18493541?v=3'),
(22013117,'yvonne-liu', 'https://avatars0.githubusercontent.com/u/22013117?v=3');

-- 1 TO 1
INSERT INTO posts(title, body, date, user_id) VALUES
('Lorem1', '111-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?','2017-04-01', 1),
('Lorem2', '222-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?', '2017-04-02', 2),
('Lorem3', '333-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?', '2017-04-03', 1),
('Lorem4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?','2017-04-04', 2);

COMMIT;
