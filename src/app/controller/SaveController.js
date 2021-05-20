const Table = require("../models/Table");
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SaveController {
   
    table(req, res, next){
        const tabless = new Table(req.body);
        tabless.save();
        // res.render('user', {layout: false});
        Table.find({})
        .then(tables => {
            res.render('user', { 
                tables: mutipleMongooseToObject(tables), 
                layout: false
            });
        })
        .catch(next);
    }
    
}

module.exports = new SaveController;