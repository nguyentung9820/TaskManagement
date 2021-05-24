const Table = require("../models/Table");
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SaveController {
   
    table(req, res, next){
        const tabless = new Table(req.body);
        tabless.save();
        res.redirect('/user')
        // Table.find({})
        // .then(tables => {
        //     res.redirect('/user',{
        //         tables: mutipleMongooseToObject(tables), 

        //     }
        //     );
        // })
        // .catch(next);
    }
    
}

module.exports = new SaveController;