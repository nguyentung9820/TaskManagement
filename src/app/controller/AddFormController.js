const Course = require('../models/Course');


class AddFormController {
    
    index(req, res, next) {
       const count_table = req.body;
        for(let a = 0; a < count_table; a++){
            res.render('table', {layout: false})
        }              
    }
    
    

}

module.exports = new AddFormController;