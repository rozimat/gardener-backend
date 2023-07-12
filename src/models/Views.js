const  { model, Schema } = require('mongoose');

const schema = new Schema({
  post_id: { 
    type: String,
    required: true,
  },
  views: {
    type: String
  }
},
{
  timestamps: true,
}
);


module.exports = model("Views", schema)

