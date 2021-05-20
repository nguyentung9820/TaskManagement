const Course = require("../models/Course");

class SignUpController {
   
    signup(req, res){
        const course = new Course(req.body);
        course.save();
        res.render('login', {layout: false});
    }
    
}

module.exports = new SignUpController;