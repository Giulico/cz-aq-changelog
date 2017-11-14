"format cjs";

var engine = require('./engine');
var types = require('./src/types');

module.exports = engine({
  types: types
});
