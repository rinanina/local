const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  type: { type: String, enum: ['ZINE', 'TAPE'], default: 'ZINE' },
  status: { type: String, enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT' },
  title: { type: String },
  slides: [{ type: Types.ObjectId, ref: 'Slide' }],
});

module.exports = model('Edition', schema);

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
