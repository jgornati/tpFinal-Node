var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empleadoSchema = new Schema({
  nombre: String,
  apellido: String,
  mail: String,
  pass: String
});

var empleadoModel = mongoose.model('empleados', empleadoSchema);
module.exports = empleadoModel;
