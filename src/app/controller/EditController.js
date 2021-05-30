const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course');
const Table = require("../models/Table");



class EditController{
// [POST] /user/edit-table 
editForm(req, res , next){
    Table.find({_id: req.body.Idtable})
    .then(tables => {
        res.render('user/table', { 
            tables: mutipleMongooseToObject(tables), layout: false 
        });
    })
    .catch(next);
}
// [PUT] /user/edit-table
tableEdit(req, res, next){
    
    Table.updateOne({_id: req.body.Idtable}, req.body)
    .then(() => res.redirect('/user'))
    .catch(next)
}



// [POST] /user/edit-table-team
editFormTeam(req, res , next){
    Table.find({_id: req.body.Idtable})
    .then(tables => {
        res.render('user/tableteam', { 
            tables: mutipleMongooseToObject(tables), layout: false 
        });
    })
    .catch(next);
}
// [PUT] /user/edit-table-team
editTeamTable(req, res, next){
    Table.updateOne({_id: req.body.Idtable}, req.body)
    .then(() => res.redirect('/user/team'))
    .catch(next)
}
}


module.exports = new EditController