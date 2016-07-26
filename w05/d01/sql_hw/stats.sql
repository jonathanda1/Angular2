All columns for all players from the New York Knicks (NYK).

SELECT name FROM players WHERE team ='NYK';

All columns for all players from the Indiana Pacers (IND) who are under 26 years old.

SELECT * FROM players WHERE team='IND' and age < 26;

All columns for all players, ordered from least points scored to most points scored.

SELECT * FROM players ORDER by points;

Name and Points per game (points/games), for the players with the top 20 points per game.

SELECT name, points/games FROM players ORDER by points DESC LIMIT 20;

The average age for all players.

The average age for all players on the Oklahoma City Thunder (OKC).

The average age for all players who played more than 40 games.
