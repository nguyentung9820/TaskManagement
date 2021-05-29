const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const Course = new Schema({
    // _id: ObjectId,
    username: { type: String},
    password: { type: String },
    email: { type: String},
    idTeam: { type: String, default: null },
    company: { type: String },
    createdAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now },
});
Course.virtual('Id').get(function(){
    return this._id;
});

module.exports = mongoose.model('Course', Course);