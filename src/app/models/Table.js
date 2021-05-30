const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Table = new Schema({
    id: { type: String},
    codeIdTeam:{type: String, default: null},
    status: {type: String},
    title: { type: String },
    description: { type: String},
    deadline: { type: Date },
    createdAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now },
    
    column1: { type: String},
    column2: { type: String},
    column3: { type: String},
    column4: { type: String},
    Idtable:{type: String}
});


module.exports = mongoose.model('Table', Table);