const Admins = require('../models/Admin');
const { sign } = require('../utils/jwt');
const bcrypt = require('bcrypt');
const Joi = require("joi")


const login = async(req, res) => {
  try {
    
    const { username, password } = await req.body;
    
    console.log(req.body)


    const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
   })
  const {error} = schema.validate({username, password});
  if (error) {
    return res.status(400).json({ message: "Password or login is invalid! "})
  }


  const admin = await Admins.findOne({ username });
  if(!admin) 
    return res.status(403).json({ message : "Invalid username or password!"});
  
  const compaire = await bcrypt.compare( password, admin.password );
  if(!compaire) return res.status(403).json({ message : "Invalid username or password!"});


    res.cookie("token", sign({ id : admin.id}), {maxAge: 80000*20000})
    res.send('Cookie have been saved successfully');
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }
}



const register = async(req, res) => {
  try {
    const { username, _password, phone_number } = req.body;

    console.log(username, _password, phone_number);

    const schema = Joi.object({
      username: Joi.string().required(),
      _password: Joi.string().required(),
      phone_number: Joi.string().required()
    })
  
  
    const {error} = schema.validate({username, _password, phone_number});
    if (error) {
      return res.status(400).json({ message: "Password or login is invalid! "})
    }
  
    const admin = await Admins.findOne({ username });
    if(admin) return res.status(403).json({ message : "User already registered"});
  
    const password = await bcrypt.hash( _password, 10);
  
    
    Admins.create({ username, password, phone_number, supper_admin_id});
  
    res.cookie("token", sign({ username : username}), {maxAge: 80000*20000})
    return res.status(201).json({ message : "Created admin successfully"});
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }

}


module.exports = {
  login,
  register,


};
