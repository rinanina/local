const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  // type: { type: String, enum: ['ZINE', 'TAPE'], default: 'ZINE' }, // is it possible to have separate models for different types
  // status: { type: String, enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT' },
  title: { type: String, required: true },
  slides: [{ type: Types.ObjectId, ref: 'Slide' }],
  date: { type: Date, default: Date.now }
});

module.exports = model('Zine', schema);

//Edition: {
//	id, number uniq
//type, ‘zine’, ‘tape’ enum
//status, ‘draft’, ‘published’ enum
//title: string, uniq, (duplicate check, validation string length)
//	slides: [{
//		artist_name?: ‘’, string, validation string length
//		slide_description?: ‘’, string
//		link_to_artist_page?:’’, string
//		img: file, required, size validation
//	}]
//}
