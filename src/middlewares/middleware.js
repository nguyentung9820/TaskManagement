const Course = require('../app/models/Course')
class middlewares{
     requireAuth(req, res ,next){
        const auth = req.cookies['oreo'];
        // res.send(auth);
        if(!auth){
            res.redirect('/login')
            return;
        }
        const user =  Course.findOne({username: req.cookies['oreo']});
        // res.send('user')
        if(!user){
            res.redirect('/login')
            return;
        }
        next();
        
    };
}


module.exports = new middlewares;