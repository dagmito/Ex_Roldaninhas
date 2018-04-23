function roldanasDAO(conn){
    this._conn = conn;
}

roldanasDAO.prototype.listaRoldanas = function(callback){
    this._conn.query('SELECT * FROM roldaninhas;', callback);
}

roldanasDAO.prototype.insertRoldana = function(roldana, callback){
    this._conn.query('INSERT INTO roldaninhas SET ?', roldana, callback);
}

module.exports = function () {
    return roldanasDAO;
}