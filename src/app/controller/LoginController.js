const Course = require("../models/Course");
class LoginController {
    index(req, res) {
        return res.render('login',{layout: false});
    }
    
}

module.exports = new LoginController;