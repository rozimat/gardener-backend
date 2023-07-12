const  { model, Schema } = require('mongoose');

const schema = new Schema({
  name: { 
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true
  },
  mobile: { 
    type: String
    
  },
  servises: { 
    type: String
  },
  message: { 
    type: String,
    required: true
  },
  proccess: { 
    type: String,
    required: true
  }
},
{
  timestamps: true,
}
);


module.exports = model("Quote", schema)

