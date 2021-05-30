

class LogoutController {
    
    index(req, res, next) {
            res.clearCookie('oreo')
            res.redirect('/')
               
    }
    

}

module.exports = new LogoutController;