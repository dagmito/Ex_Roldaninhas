const app = require('./config/cfg_express')();
const route = require('./app/routes')(app);

app.listen(3000, function(){
    console.log('Roldaninhas na Pista!');
});