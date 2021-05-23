const Course = require("../models/Course");
class SigninController {

    async user(req, res, next) {
        // res.send('done')
        try {

            var user = req.body.username;
            var pass = req.body.password;
            const info = await Course.findOne({username:user});
            if(!info){

                res.send('ok')
                // res.redirect('/login')
                return;
            }
            else{
                if(info.password == pass){
                    res.cookie('oreo', info.Id)
                    res.status(201).render('user',{layout: false})
                }
            }
            
           
        } catch (error) {
            res.redirect('/login')
   
        
        }
    }
    
}

module.exports = new SigninController;