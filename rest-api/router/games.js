const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { gameController} = require('../controllers');

// middleware that is specific to this router

router.get('/', gameController.getGames);
router.post('/', auth(), gameController.createGame);
router.get('/:gameId', gameController.getGame);


module.exports = router