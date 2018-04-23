module.exports = function (app) {
    app.get('/catalogo', function (request, response) {
        
        var conn = app.infra.factoryConnection;
        var DAO = new app.infra.roldanasDAO(conn);

        DAO.listaRoldanas(function(error, results, fields){
            if (error) throw error;
            response.render('./catalogo.js', {
                resultsHTML: results
            });
        });
    });
}