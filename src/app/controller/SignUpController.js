const Course = require("../models/Course");

class SignUpController {
   
    signup(req, res){
        const course = new Course(req.body);
        // res.send(course)
        course.save();
        res.redirect('/login')
        // res.send('ok')
    }
    
}

module.exports = new SignUpController;