const express = require('express');
const router = require('../routes');
const cookie = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');



const modules = async(app)=>{

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(fileUpload());
  app.use(cookie());
  app.use(cors());
  app.use(express.static(process.cwd() + "/uploads"));
  app.use('/api', router);

}

module.exports = modules;