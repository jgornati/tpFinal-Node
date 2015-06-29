var app = module.parent.exports.app;
var Empleados = require('../models/empleados.js');

app.get('/panel/employees', function(req, res) {
  Empleados.find({}, function(err, docs) {
    res.render('employees', {
      title: 'Lista de Empleados',
      empleados: docs
    });
  });
});


app.get('/panel/employees/new', function(req, res) {
  res.render('new', {
    title: 'Nuevo Emplado'
  });
});

app.post('/panel/employees/new', function(req, res) {
  console.log(req.body);
  var e = new Empleados({
    nombre: req.body.name,
    apellido: req.body.apellido,
    mail: req.body.mail,
    pass: req.body.pass
  });
  e.save(function(err, doc){
    if(!err){
      res.redirect('/panel/employees/');
    } else{
      res.end(err);
    }
  });
});
