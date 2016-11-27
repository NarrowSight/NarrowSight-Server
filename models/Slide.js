const mongoose = require('mongoose');

const SlideSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Slide', SlideSchema);
