var app = require('./config/cfg_express')();

app.get('/', function(request, response){
    response.send('Roldanas da Pista!')
});

app.listen(3000);