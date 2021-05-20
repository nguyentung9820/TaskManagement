const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    username: { type: String},
    password: { type: String },
    email: { type: String},
    company: { type: String },
    createdAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Course', Course);