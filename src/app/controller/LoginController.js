const Course = require("../models/Course");
class LoginController {
    index(req, res) {
        return res.render('login',{layout: false});
    }

    async user(req, res, next) {
    
        try {

            var user = req.body.username;
            var pass = req.body.password;
            const info = await Course.findOne({username:user});
            // res.send(info);
            if(!info){
                res.redirect('/login')
                return;
            }
            else{
                if(info.password == pass){
                    res.cookie('oreo', info.username)
                    
                    res.status(201).render('user',{layout: false})
                }
            }
            
           
        } catch (error) {
            res.redirect('/login')
   
        
        }
    }
    
}

module.exports = new LoginController;