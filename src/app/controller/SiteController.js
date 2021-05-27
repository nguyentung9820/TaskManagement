

class SiteController {

    // [GET] /
    home(req, res){
        res.render('home');
    }

    // [GET] /aboutus
    aboutus(req, res){
        res.render('aboutus');
    }
}



module.exports = new SiteController;