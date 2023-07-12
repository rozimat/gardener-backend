const  { model, Schema } = require('mongoose');

const schema = new Schema({
  username: { 
    type: String,
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true
  },
  phone_number : {
    type: String,
    required: true
  }

});


module.exports = model("Admins", schema)