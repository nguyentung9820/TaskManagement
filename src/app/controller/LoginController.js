const Course = require("../models/Course");
const { mongooseToObject } = require('../../util/mongoose');

class LoginController {

    // [GET] /login
    index(req, res, next) {
        return res.render('login', { layout: false });
    }

    // [POST] /login
    async postLogin(req, res, next) {
        // res.send('done')
        try {

            var user = req.body.username;
            var pass = req.body.password;
            const info = await Course.findOne({ username: user });

            console.log(info.username);
            console.log(info.password);

            if (!info) {
                console('Info not !!!!!!!!!!!!!!!');
                // res.send('ok')
                res.redirect('/login')
                return;
            }
            else if (info.password == pass) {
                console.log('Password correct !!!!!!!!!!!!!1')
                res.cookie('oreo', info.Id)
                res.redirect('/user')
            }

        } catch (error) {
            res.redirect('/login')


        }
    }
}


module.exports = new LoginController;