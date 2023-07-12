const  { model, Schema } = require('mongoose');

const schema = new Schema({
  email: { 
    type: String,
    required: true,
    unique: true
  },
});


module.exports = model("Subscribes", schema)

