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

deleteFormUser(req, res, next){
    const idTable = req.body.Idtable;
    console.log(req.body.Idtable);
    req.body.deleted = true;

    Table.updateOne({_id: idTable}, req.body)
    .then(() => res.redirect('/user'))
    .catch(next)
}

deleteFormTeam(req, res, next){
    const idTable = req.body.Idtable;
    console.log(req.body.Idtable);
    req.body.deleted = true;

    Table.updateOne({_id: idTable}, req.body)
    .then(() => res.redirect('/user/team'))
    .catch(next)
}

deleteTableTest(req, res, next){
    const id = req.params.id    
    Table.deleteOne({_id: id})
    .then(() => res.redirect('/user') )
}

async dragend(req, res, next){
    var pre_column = req.body.pre_column
    var new_column = req.body.column
    await Table.find({_id: req.body.idTable })
    .then(tables => {
        tables.forEach(datas =>{
            datas[pre_column] = null
            datas[new_column] = new_column
            // console.log(pre_column)
            Table.updateOne({_id: req.body.idTable}, datas)
            .catch(next)
        })
    })
}
}


module.exports = new EditController