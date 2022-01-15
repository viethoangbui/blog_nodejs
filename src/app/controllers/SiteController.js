
class SiteController{
    
    // [GET] /news
    index(req, res){
        res.render('home', {title: 'Home'});
    }

    // [GET] /news/:slug
    search(req, res){
        res.render('search', {title: 'Search'});
    }
}

module.exports = new SiteController;