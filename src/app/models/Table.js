const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Table = new Schema({
    status: { type: String},
    title: { type: String },
    description: { type: String},
    deadline: { type: Date },
    createdAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Table', Table);