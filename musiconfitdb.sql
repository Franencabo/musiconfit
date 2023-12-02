-- Creación de la base de datos --
DROP DATABASE IF EXISTS musiconfitdb;
CREATE DATABASE musiconfitdb;
-- Usamos la base de datos --
USE musiconfitdb;
-- Crear tabla de playlists
CREATE TABLE IF NOT EXISTS playlists (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    color VARCHAR(255),
    cover VARCHAR(255),
    duration INT,
    banner VARCHAR(255),
    src VARCHAR(255),
    description VARCHAR(255)
);
-- Crear tabla de tracks
CREATE TABLE IF NOT EXISTS tracks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    playlist_id INT,
    title VARCHAR(255),
    artist VARCHAR(255),
    timeToStart INT,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id)
);
-- Insertar datos en la tabla Playlists sin especificar el id
INSERT INTO playlists (
        id,
        title,
        color,
        cover,
        duration,
        banner,
        src,
        description
    )
VALUES (
        6,
        'Rihanna Mix',
        'red',
        '../../../covers/Rihanna-cover.jpeg',
        3406,
        '../../../banners/Rihanna-Banner.jpeg',
        '../../../music/RihannaMix.mp3',
        'La mejor música del momento'
    );
-- Insertar datos en la tabla Tracks sin especificar el id
INSERT INTO tracks (playlist_id, title, artist, timeToStart)
VALUES (6, 'Bitch Better Have My Money', '', 0),
    (6, 'Wild Thoughts', '', 153),
    (6, 'Umbrella', '', 335),
    (6, 'S&M', '', 532),
    (6, 'Pon de Replay', '', 770),
    (6, 'Disturbia', '', 967),
    (6, 'Don''t stop the music', '', 1248),
    (6, 'Where have you been', '', 1474),
    (6, 'Only girl', '', 1725),
    (6, 'Can''t remember to forget you', '', 2050),
    (6, 'Work', '', 2284),
    (6, 'You Da One', '', 2435),
    (6, 'Rude Boy', '', 2628),
    (6, 'Kiss it better', '', 2751),
    (6, 'We found love', '', 2971),
    (6, 'Rigth now', '', 3122);
-- Insertar datos en la tabla Playlists sin especificar el id
INSERT INTO playlists (
        id,
        title,
        color,
        cover,
        duration,
        banner,
        src,
        description
    )
VALUES (
        3,
        'Dance 6',
        'blue',
        '../../../covers/DANCE6.jpeg',
        3520,
        '../../../banners/DANCE6-Banner.jpeg',
        '../../../music/DANCE6.mp3',
        'La mejor música del momento'
    );
-- Insertar datos en la tabla Tracks sin especificar el id
INSERT INTO tracks (playlist_id, title, artist, timeToStart)
VALUES (3, 'What a feeling', 'Block & Crown', 0),
    (3, 'Call me', 'Belters Only', 200),
    (
        3,
        'Long Train',
        'Bougenvilla ft. Chris Alain',
        397
    ),
    (3, 'Cuff it', 'Beyoncé', 538),
    (3, 'Never gonna not dance again', 'Pink', 721),
    (3, 'Oh No You Didn''t', 'Hix & Kelli-Leigh', 897),
    (3, 'Edge of Seventeen', 'Wuki', 1070),
    (3, 'Offshore', 'Kryder', 1070),
    (
        3,
        'It Feels So Good (NIGHT/MOVES Remix)',
        'Sonique',
        1460
    ),
    (3, 'Blue', 'David Guetta & Bebe Rexha', 1652),
    (3, 'Lionheart', 'Joel Corry & Tom Grennan', 1832),
    (3, 'Work it', 'Dance System ft. DJ Deeon', 1998),
    (3, 'Make You Sweat', 'Majestic', 2235),
    (3, 'Daddy Shhh', 'Crusy & Mark Knight', 2397),
    (
        3,
        'Alors on Dance (Tribal Mix)',
        'Stromae',
        2507
    ),
    (
        3,
        'Work (Tribal Mix)',
        'Pupa Nas T, Denise Belfon, Kevin McKay',
        2671
    ),
    (
        3,
        'Session 53 (Exclusive Mashup)',
        'Shakira ft. Bizarrap',
        2805
    ),
    (
        3,
        'Unholy (Tribal Mix)',
        'Sam Smith ft. Kim Petras',
        3058
    ),
    (
        3,
        'Star Walkin'' (Tribal Mix)',
        'Lil Nas X',
        3261
    );
-- Insertar datos en la tabla Playlists sin especificar el id
INSERT INTO playlists (
        id,
        title,
        color,
        cover,
        duration,
        banner,
        src,
        description
    )
VALUES (
        4,
        'Dance 7',
        'brown',
        '../../../covers/DANCE7.jpeg',
        3428,
        '../../../banners/DANCE7-Banner.jpeg',
        '../../../music/DANCE7.mp3',
        'La mejor música del momento'
    );
-- Insertar datos en la tabla Tracks sin especificar el id
INSERT INTO tracks (playlist_id, title, artist, timeToStart)
VALUES (
        4,
        'Satellite (Dance Mix)',
        'Bebe Rexha & Snoop Dogg',
        0
    ),
    (
        4,
        'The music began to play',
        'Mark Knight, Armand Van Helden',
        230
    ),
    (4, 'Nothing else matters', 'Mista Jam', 440),
    (
        4,
        'Work with my love',
        'Alok & James Arthur',
        610
    ),
    (4, 'Sweat 2022', 'C&C Music Factory', 820),
    (
        4,
        'Enchanté',
        'Lewis Thompson ft. Clementine Douglas',
        870
    ),
    (4, 'Do you know', 'Just Kiddin', 1014),
    (4, 'Street Stuff', 'Majestic', 1014),
    (
        4,
        'Renegade Body',
        'Block & Crown, Lissat',
        1152
    ),
    (4, 'Alo Alo', 'Martin Solveig', 1522),
    (
        4,
        'Groove Tonight (Saxo Mix)',
        'Mr.Belt & Wezol',
        1673
    ),
    (4, 'Insomnia 2023', 'Faithless', 1860),
    (4, 'Mr. Vain 2023', 'Block & Crown', 2106),
    (
        4,
        'Feel this good (Jordie Harsh remix)',
        'Sigala',
        2260
    ),
    (
        4,
        'Be my lover (Future Rave Mix)',
        'La Bouche, David Guetta & Hypaton',
        2451
    ),
    (4, 'Phenomenal (Tribal Mix)', 'Noa Kirel', 2640),
    (4, 'Tattoo (Tribal Mix)', 'Loreen', 2852),
    (
        4,
        'It''s not right (Oye! Tribal Mix)',
        'Whitney Houston',
        3124
    );
-- Crear tabla de usuario --
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    nickname VARCHAR(255),
    birthdate VARCHAR(255)
);
-- Insertar un usuario en la tabla --
INSERT INTO users (email, password, nickname, birthdate)
VALUES (
        'franencabo@gmail.com',
        'musiconfit',
        'franencabo',
        '1980-09-29'
    );
-- Recuperar los datos --
SELECT *
FROM users;