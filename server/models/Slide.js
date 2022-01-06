const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  artist_name: { type: String },
  slide_description: { type: String },
  link_to_artist_page: { type: String },
  img: { type: Buffer, required: true },
});

module.exports = model('Slide', schema);
