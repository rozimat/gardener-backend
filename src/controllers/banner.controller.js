const Admins = require('../models/Admin');
const Banner = require('../models/Banner');


const postBanner = async(req, res)=>{
  try {
    const { title, description} = req.body;
  const {image}  = req;

  if(req.user.username){
    const username = req.user.username;
    const admin = await Admins.findOne({ username });
    var admin_id = admin.id;
  }
  else{
    var admin_id = req.user.id;
  }
 
  Banner.create({ image, title, description, admin_id });
  res.status(201).json({ message : "Successfully created!"});
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }

}

const putBanner = async(req, res) => {
 try {
  const { title, description} = req.body;
  const { image }  = req;

  const { id } = req.params;
  const _id = id;

  if(req.user.username){
    const username = req.user.username;
    const admin = await Admins.findOne({ username });
    var admin_id = admin.id;
  }
  else{
    var admin_id = req.user.id;
  }

  const update = { $set: { image, title, description, admin_id}};
 
  await Banner.findOne({_id : id}).updateOne(update);
  res.status(201).json({ message: "Updated successfully"})

 } catch (error) {
  res.status(500).json({ message: "Internal server error"})
 }
}

const getBanner = async(req, res)=>{
  try {
    const data = await Banner.find();
    res.status(201).json({ message : "Success!", data})
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }
}


const deleteBanner = async(req, res)=>{
  try {
    const { _id } = req.params;
    await Banner.deleteOne({ _id})
    res.status(201).json({ message : "Successfully delete!"});
  } catch (error) {
     res.status(500).json({ message: "Internal server error"})
  }

}
  
module.exports = {
  postBanner,
  putBanner,
  getBanner,
  deleteBanner,


};
