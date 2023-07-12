const auth = require('./auth.routes');
const banner = require('./banner.routes');
const quote = require('./quote.routes');
const subscribe = require('./subscribe.routes');
const products = require('./products.routes');
const teams = require('./teams.routes');
const views = require('./views.routes')

module.exports = [
  auth,
  banner,
  quote,
  products,
  teams,
  subscribe,
  views,
  
  


  
]