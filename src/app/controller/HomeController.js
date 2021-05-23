const Course = require('../models/Course');


class HomeController {
    
    index(req, res, next) {
            res.render('home')
               
    }
    

}

module.exports = new HomeController;