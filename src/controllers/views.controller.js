const Views = require('../models/Views');
const Products = require('../models/Products');

const viewCounter = async (req, res)=>{

  const post_id = req.params.id;
  var views = 0;


    if(post_id){
      views += 1 ;
      Views.create({ post_id, views })
      
    }
    else{
      res.status(403).json({ message : "Post is not found!"})
    }

  
}

module.exports ={
  viewCounter,

}