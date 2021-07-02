

class SiteController {

    // [GET] /
    home(req, res){
        res.render('home',{layout: false});
    }

    
}



module.exports = new SiteController;