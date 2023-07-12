const Subscribes = require('../models/Subscribe')

const postSubscribe = async(req, res)=>{
  try{
    const { email } = req.body;
    const subscribe = await Subscribes.findOne({email});
    

  if(subscribe){
    res.status(401).json({ message: "You already Subscribed!"})
  }
 else{
  Subscribes.create({email});
  res.status(201).json({ message: "Succsesfully subscribe!"})
 }
  }
  catch(error){
    res.status(500).json({ message: "Internal server error"})
  }
 

}

const getSubscribe = async(req, res)=>{
  const data = await Subscribes.find();
  res.status(201).json({ message : "Success!", data})
 
}
const deleteSubscribe = async(req, res)=>{
  const { email} = req.params;
  await Subscribes.deleteOne({email});
  res.status(201).json({ message: "sucsessfully delete"})
 
}


module.exports = {
  postSubscribe,
  getSubscribe,
  deleteSubscribe,
   

}