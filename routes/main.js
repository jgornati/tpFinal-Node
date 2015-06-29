var app = module.parent.exports.app;
var Empleados = require('../models/empleados.js');

app.get('/panel/employees', function(req, res){
  Empleados.find({},function(err, docs){
    res.render('listEmployees', {title: 'Lista de Empleados', empleados: docs});
  });
});
