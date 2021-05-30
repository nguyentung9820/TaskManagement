const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Table = new Schema({
    id: { type: String},
    title: { type: String },
    description: { type: String},
    deadline: { type: Date },
    createdAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now },
    codeIdTeam:{type: String, default: null},
    column1: { type: String},
    column2: { type: String},
    column3: { type: String},
    column4: { type: String},
    table:{type: String},
    Idtable:{type: String}
});


module.exports = mongoose.model('Table', Table);