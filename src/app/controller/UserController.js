const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course');
const Table = require("../models/Table");


class UserController {

    // [GET] /user
   async index(req, res){

        const auth = req.cookies['oreo'];
        Table.find({id: auth })
        .then(tables => {
            res.render('user/user',{
                tables:  mutipleMongooseToObject(tables), 
                layout: false,
            }
            );
        })
        .catch();
        
    }

    // [GET] /user/info
    info(req, res, next){
        const auth = req.cookies['oreo'];
        
        Course.find({_id: auth})
        .then(courses => {
            res.render('user/info', { 
                courses: mutipleMongooseToObject(courses), layout: false 
            });
        })
        .catch(next);
    }

    // [PUT] /user/info/edit
    infoEdit(req, res, next){
        const auth = req.cookies['oreo'];
        Course.updateOne({_id: auth}, req.body)
        .then(() => res.redirect('/user/info'))
        .catch(next)
    }

    // [POST] /user/create
    create(req, res, next){
        
        const auth = req.cookies['oreo']
        req.body.id = auth;
        const tabless = new Table(req.body);
        // res.send(tabless)
        tabless.save();
        res.redirect('/user')
        
        
    }
    // [GET] /user/team
    async team(req, res, next){
        const auth = req.cookies['oreo'];
        const info = await Course.findOne({_id: auth});

        console.log(info.idTeam);
        const codeIdTeam = info.idTeam;
        
        Table.find({codeIdTeam: codeIdTeam})
        .then(tables => {
            res.render('user/team', {
                tables: mutipleMongooseToObject(tables),
                layout: false
            });
        })
        .catch(next);
    }

    // [POST] /user/team/create
    teamCreate(req, res, next){
        req.body.codeIdTeam = res.locals.idTeam;
        const tables = Table(req.body);
        tables.save();
        res.redirect('/user/team')
    }
    // [POST] /user/edit-table
    edit(req, res , next){
        Table.find({column: 'column1'})
        .then(tables => {
            res.render('user/table', { 
                tables: mutipleMongooseToObject(tables), layout: false 
            });
        })
        .catch(next);
    }
    // [PUT] /user/edit-table
    tableEdit(req, res, next){
        Table.updateOne({column: 'column1'}, req.body)
        .then(() => res.redirect('/user'))
        .catch(next)
    }

    
}


module.exports = new UserController;