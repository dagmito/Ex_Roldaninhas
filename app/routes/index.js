module.exports = function (app) {

    app.get('', function (request, response) {
        response.redirect('/index.ejs');
    });

    app.get('/index.ejs', function (request, response) {
        response.render('index');
    });
}