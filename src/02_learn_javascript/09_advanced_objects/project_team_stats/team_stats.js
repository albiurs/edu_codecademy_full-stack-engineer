// Team Stats

// We want to create and extract information about your favorite sports team.Basketball, soccer, tennis, or water polo, you pick it.It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

// Once created, you can manipulate these data structures as well as gain insights from them.For example, you might want to get the total number of games your team has played, or the average score of all of their games.


const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Dan',
            lastName: 'Gomez',
            age: 13
        },
        {
            firstName: 'Lisa',
            lastName: 'Miller',
            age: 9
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'X-Team',
            teamPoints: 48,
            opponentPoints: 27
        },
        {
            opponent: 'Y-Team',
            teamPoints: 40,
            opponentPoints: 27
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstname: firstName,
            lastname: lastName,
            age: age
        };
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Team-A', 30, 32);
team.addGame('Team-B', 40, 43);
team.addGame('Team-C', 25, 23);
console.log(team.games);



