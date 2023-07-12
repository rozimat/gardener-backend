const { isValidObjectId } = require('mongoose');
const Products = require('../models/Products');
const Admins = require('../models/Admin');

const postProducts = async(req, res)=>{
  try {
    const { title } = req.body;
    const { image }  = req;

    if(req.user.username){
      const username = req.user.username;
      const admin = await Admins.findOne({ username });
      var admin_id = admin.id;
    }
    else{
      var admin_id = req.user.id;
    }

    Products.create({ image, title, admin_id });
    res.status(201).json({ message : "Successfully created!"});
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }

}

const putProduct = async(req, res) => {
  try {
   const { title } = req.body;
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
 
   const update = { $set: { image, title, admin_id}};
  
   await Products.findOne({_id}).updateOne(update);
   res.status(201).json({ message: "Updated successfully"})
 
  } catch (error) {
   res.status(500).json({ message: "Internal server error"})
  }
 }

const getProducts = async(req, res)=>{
  const data = await Products.find();
  res.status(201).json({ message : "Success!", data})
}


const deleteProduct = async(req, res)=>{
 try {
  const { _id } = req.params;
  await Products.deleteOne({ _id})
  res.status(201).json({ message : "Successfully delete!"});
 } catch (error) {
  res.status(500).json({ message: "Internal server error"})
 }

}
  
module.exports = {
  postProducts,
  putProduct,
  getProducts,
  deleteProduct,


};
