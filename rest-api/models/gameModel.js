const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

//title, _ownerId, imageUrl, description, genres, price, rating

const gameSchema = new mongoose.Schema({
    _ownerId: {
        type: ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: false
    }},
    { timestamps: { createdOn: 'created_on' } });

module.exports = mongoose.model('Game', gameSchema);
