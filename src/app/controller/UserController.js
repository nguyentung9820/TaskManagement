const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course');
const Table = require("../models/Table");


class UserController {

    // [GET] /user
    index(req, res){
        res.render('user/user',{

            layout: false
        });
        
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
        const tabless = new Table(req.body);
        tabless.save();
        res.redirect('/user')
        // Table.find({table: req.body.table})
        // .then(tables => {
        //     res.render('user/user',{
        //         tables:  mongooseToObject(tables), 
        //         layout: false,
        //     }
        //     );
        // })
        // .catch();
        
    }

}


module.exports = new UserController;