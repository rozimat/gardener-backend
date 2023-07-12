const { v4 : uuid } = require('uuid');
const path = require('path');

const fileUpload = async (req, res, next) =>{
  const image = req.files?.image;


  if(!image) return res.status(400).json({ message : "Image is required!"});

  const extraname = path.extname(image.name);
  const newImg = `${uuid()}${extraname}`;

  image.mv(`${process.cwd()}/uploads/images/${newImg}`);

  req.image = newImg;
  next();
}

module.exports = fileUpload;