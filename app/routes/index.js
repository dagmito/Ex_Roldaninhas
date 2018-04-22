module.exports = function (app) {
    
    app.get('/index.ejs', function (request, response) {
        response.render('index', {
            
        });
    });
}