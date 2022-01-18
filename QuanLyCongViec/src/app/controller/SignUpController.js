const Course = require("../models/Course");

class SignUpController {
   
    // [GET] /signup
    index(req, res){
        res.redirect('/')
    }

    // [POST] /signup
    signupPost(req, res){
        const course = new Course(req.body);
        course.save();
        
        res.redirect('/')
    }
    
}

module.exports = new SignUpController;