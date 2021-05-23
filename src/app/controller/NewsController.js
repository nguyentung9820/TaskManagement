
const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course');


class NewsController {
    
    index(req, res, next) {
        const auth = req.cookies['oreo'];
        
        // res.send(auth)
        Course.find({_id: auth})
        .then(courses => {
            res.render('news', { 
                courses: mutipleMongooseToObject(courses), layout: false 
            });
        })
        .catch(next);
    }
    edit(req, res, next){
        const auth = req.cookies['oreo'];

        Course.updateOne({_id: auth}, req.body)
        .then(() => res.redirect('/user'))
        .catch(next)
    }
    
}

module.exports = new NewsController;