const mongoose = require('mongoose');
const Presentation = require('Presentation');

const ClientSchema = mongoose.Schema({
  name: String,
  presentations: [Presentation]
});

module.exports = mongoose.model('Client', ClientSchema);
