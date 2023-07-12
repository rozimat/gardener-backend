const Quote = require('../models/Quote');

const postQuote = async ( req, res) =>{
  try {
    const { name, email, mobil, servises, message } = req.body;

    const proccess = false;

    Quote.create({ name, email, mobil, servises, message, proccess })
    res.status(201).json({ message: "Sucsessfully Created!"})
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error"});
  }

}
const putQuote = async(req, res) => {
  try {
 
   const { _id } = req.params;
   const proccess = true;
   const update = { $set: {proccess }};
   await Quote.findOne({_id}).updateOne(update);
   res.status(201).json({ message: "Updated successfully"})
 
  } catch (error) {
   res.status(500).json({ message: "Internal server error"})
  }
 }


const getQuote = async ( req, res) =>{
  try {
    const data = await Quote.find();
    res.status(200).json({ message : "Succsess!", data})
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error"});
  }

}


const deleteQuote = async ( req, res) =>{
  try {
    const { _id } = req.params;
    await Quote.deleteOne({_id});
    res.status(201).json({ message: "sucsessfully delete"})
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error"});
  }

}


module.exports = {
  postQuote,
  putQuote,
  getQuote,
  deleteQuote,

}