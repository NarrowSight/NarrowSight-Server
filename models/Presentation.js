const mongoose = require('mongoose');
const Slide = require('Slide');

const PresentationSchema = mongoose.Schema({
  name: String,
  published: Boolean,
  slides: [Slide]
});

module.exports = mongoose.model('Presentation', PresentationSchema);
