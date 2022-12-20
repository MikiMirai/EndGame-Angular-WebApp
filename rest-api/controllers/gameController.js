const { gameModel } = require('../models');
function getGames(req, res, next) {
    gameModel.find()
        .populate('_ownerId')
        .then(games => res.json(games))
        .catch(next);
}

function getGame(req, res, next) {
    const { gameId } = req.params;

    gameModel.findById(gameId)
        .populate({
            path: 'posts',
            populate: {
                path: '_ownerId'
            }
        })
        .then(game => res.json(game))
        .catch(next);
}

function createGame(req, res, next) {
    const { title, imageUrl, description, rating, genres, price } = req.body;
    const { _id: _ownerId } = req.user;

    gameModel.create({ title, _ownerId, imageUrl, description, rating, genres, price })
        .then(game => { res.status(200).json(game) })
        .catch(next);
}

module.exports = {
    getGames,
    createGame,
    getGame
}
