const Course = require("../models/Course");

class SignUpController {
   
    // [GET] /signup
    index(req, res){
        res.render('signup', {layout: false})
    }

    // [POST] /signup
    signupPost(req, res){
        const course = new Course(req.body);
        course.save();
        
        res.redirect('/login')
    }
    
}

module.exports = new SignUpController;