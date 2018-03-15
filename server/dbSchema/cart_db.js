var mongoose = require("mongoose");
var cartSchema = new mongoose.Schema({ 
  s_no: Number,
  id : String,
  quantity: {type: Number},
  types : String
  
});
var carts = mongoose.model("cart_db", cartSchema);
module.exports = carts;