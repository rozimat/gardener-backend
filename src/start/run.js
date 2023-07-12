require('dotenv/config')
const { connect } = require('mongoose');


const run = async (app) =>{
  await connect( process.env.MONGO_URL);

  const PORT =process.env.PORT;

  app.listen(PORT, ()=>{
    console.log(PORT);
  });
}

module.exports = run;