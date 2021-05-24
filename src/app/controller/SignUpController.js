const Course = require("../models/Course");

class SignUpController {
   
    signup(req, res){
        const course = new Course(req.body);
        // res.send(course)
        course.save();
        res.redirect('/login')
        // res.send('ok')
    }
    index(req, res){
        res.render('login')
    }
    
}

module.exports = new SignUpController;