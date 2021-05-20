const Course = require("../models/Course");

class LoginController {
    // Get /login
    index(req, res) {
        return res.render('login',{layout: false});
    }
    
}

module.exports = new LoginController;