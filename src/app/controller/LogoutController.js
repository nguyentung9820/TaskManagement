

class LogoutController {
    
    index(req, res, next) {
            res.clearCookie('oreo')
            res.render('home')
               
    }
    

}

module.exports = new LogoutController;