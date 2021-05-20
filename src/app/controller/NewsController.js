
const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course');


class NewsController {
    
    index(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('news', { 
                courses: mutipleMongooseToObject(courses) 
            });
        })
        .catch(next);
    }
    
}

module.exports = new NewsController;