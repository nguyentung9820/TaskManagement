
const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course');


class NewsController {
    
    index(req, res, next) {
        const auth = req.cookies['oreo'];
        
        // res.send(auth)
        Course.find({username: auth})
        .then(courses => {
            res.render('news', { 
                courses: mutipleMongooseToObject(courses) 
            });
        })
        .catch(next);
    }
    
}

module.exports = new NewsController;