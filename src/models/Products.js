const  { model, Schema } = require('mongoose');

const schema = new Schema({
  image: { 
    type: String,
    required: true,
  },
  title: { 
    type: String,
    required: true
  }, 
  admin_id: { 
    type: String,
    required: true
  }
},
{
  timestamps: true,
}
);


module.exports = model("Products", schema)

