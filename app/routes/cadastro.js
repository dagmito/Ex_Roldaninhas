module.exports = function (app) {

    app.get('/cadastro', function (request, response) {
        response.render('cadastro.ejs');
    });

    app.post('/cadastro', function (request, response) {

        var roldana = request.body;
        var conn = app.infra.factoryConnection;
        var DAO = new app.infra.roldanasDAO(conn);

        DAO.insertRoldana(roldana, function (error, results, fields) {
            if (error) throw error;
            response.redirect('/catalogo');
        })
    });
}