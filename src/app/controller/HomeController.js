const Course = require('../models/Course');


class HomeController {
    
    index(req, res, next) {
            res.render('home')
               
    }
    about(req, res, next) {
        res.render('aboutus')
    }

}

module.exports = new HomeController;