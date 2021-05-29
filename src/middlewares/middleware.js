const Course = require('../app/models/Course')
class middlewares{
     requireAuth(req, res ,next){
        const auth = req.cookies['oreo'];
        // res.send(auth);
        if(!auth){
            res.redirect('/login')
            return;
        }
        const user =  Course.findOne({_id: req.cookies['oreo']});
        // res.send('user')
        if(!user){
            res.redirect('/login')
            return;
        }
        next();
        
    };
    async checkIdTeam(req, res, next){
        const auth = req.cookies['oreo'];
        const info = await Course.findOne({_id: auth});
        if(!info.idTeam){
            res.redirect('/user');
            return;
        }
        if(info.idTeam == null){
            res.redirect('/user');
            return;
        }
        res.locals.idTeam = info.idTeam;

        next();
    }
}


module.exports = new middlewares;