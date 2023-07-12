const  { model, Schema } = require('mongoose');

const schema = new Schema({
  image: { 
    type: String,
    required: true,
  },
  name: { 
    type: String,
    required: true
  },
  profession: { 
    type: String,
    required: true
  },
  facebook: { 
    type: String,
    required: false
  }, 
  twitter: { 
    type: String,
    required: false
  }, 
  instagram: { 
    type: String,
    required: false
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


module.exports = model("Teams", schema)

