
const { verify } = require('../utils/jwt')

const isAuth = async (req, res, next)=>{
  try {
    const cookie = req.cookies.token
    console.log(cookie)
    if (!cookie) {
      return res.send({message: "token is not available"});
    }
    const user = verify(cookie);
    if (!user) {
       return  res.send({message: "user is not available"});
    }
    else{
      req.user = user;
      next()
    }

  } catch (error) {
    res.status(500).json({ message: "Error in server's, on is-Auths" })
  }

}

module.exports = isAuth;
