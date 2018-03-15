var mongoose = require("mongoose");
var electronicSchema = new mongoose.Schema({ 
  id: String,
  name:  String ,
  price: Number ,
  brand: String, 
  features : {
   screen: String,
   processor :String,
   os:String,
   battery:String,
   camera :String,
   ram : String,
   rom : String,
   warranty : String,
   color :String,
  },
  image :[],
  reviews :[{
   title :String,
   comment : String,
  }]
});
var electronics = mongoose.model("elec_db", electronicSchema);
module.exports = electronics;