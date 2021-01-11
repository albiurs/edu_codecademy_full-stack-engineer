// == requires ==
const PlayingField = require('./controller/PlayingFieldController');
const User = require('./controller/User');
const GameController = require('./controller/GameController');

// == class instances ==
const playingField = new PlayingField(PlayingField.generateField(5, 10, 30));
const user = new User();
const gameController = new GameController(playingField, user);

// start the game
gameController.playGame();
