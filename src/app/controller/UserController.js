const Course = require("../models/Course");
const { mutipleMongooseToObject } = require('../../util/mongoose')

class UserController{
   async index(req, res, next) {
    
        try {
            var user = req.body.username;
            var pass = req.body.password;
            console.log(user);
            const info = await Course.findOne({username:user});
            console.log(info.password);
           if(info.password == pass){
               res.status(201).render('user',{layout: false})
                
           }else res.render('login',{layout: false});
           
        } catch (error) {
            res.render('home');
            console.log('fail')
        }
    }
   
    
}

module.exports = new UserController;