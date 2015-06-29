var Empleado = require('../models/empleados');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tpFinal');

var e = new Empleado({nombre:"Joel", apellido:"Gornati", mail:"joelgornati@gmail.com", pass:"123456"});
e.save(function(err, doc){
  console.log(err, doc);
});
