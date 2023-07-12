const Admins = require('../models/Admin');
const Teams = require('../models/Teams');

const postTeams = async(req, res)=>{
  try {
    const { name, profession , facebook, twitter, instagram } = req.body;
  const {image}  = req;

  
  if(req.user.username){
    const username = req.user.username;
    const admin = await Admins.findOne({ username });
    var admin_id = admin.id;
  }
  else{
    var admin_id = req.user.id;
  }


  Teams.create({ image, name, profession, facebook, twitter, instagram, admin_id });
  res.status(201).json({ message : "Successfully created!"});
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }

}

const putTeams = async(req, res) => {
  try {
    const { name, profession , facebook, twitter, instagram } = req.body;
   const { image }  = req;
 
   const { _id } = req.params;
 
   if(req.user.username){
     const username = req.user.username;
     const admin = await Admins.findOne({ username });
     var admin_id = admin.id;
   }
   else{
     var admin_id = req.user.id;
   }
 
   const update = { $set: { image, name, profession , facebook, twitter, instagram, admin_id}};
  
   await Teams.findOne({_id}).updateOne(update);
   res.status(201).json({ message: "Updated successfully"})
 
  } catch (error) {
   res.status(500).json({ message: "Internal server error"})
  }
 }

const getTeams = async(req, res)=>{
  try {
    const data = await Teams.find();
    res.status(201).json({ message : "Success!", data})
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }
}


const deleteTeams = async(req, res)=>{
  try {
    const { _id } = req.params;
    await Teams.deleteOne({ _id})
    res.status(201).json({ message : "Successfully delete!"});
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }

}
  
module.exports = {
  postTeams,
  putTeams,
  getTeams,
  deleteTeams,


};
