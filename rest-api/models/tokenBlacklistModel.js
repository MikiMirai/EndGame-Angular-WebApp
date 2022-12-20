const mongoose = require('mongoose');

const tokenBlacklistSchema = new mongoose.Schema({
    token: String,
}, { timestamps: { createdOn: 'created_on' } });


module.exports = mongoose.model('TokenBlacklist', tokenBlacklistSchema);