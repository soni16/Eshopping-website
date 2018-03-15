var mongoose = require("mongoose");
var fashionSchema = new mongoose.Schema({ 
  id: String,
  name:  String ,
  gender: String,
  price: Number ,
  brand: String, 
  features : {
   // color: {type:String},
   // fabric :{type:String},
   // pattern:String,
  },
  image :[],
  reviews :[{
   title :String,
   comment : String,
  }]
});
var fashion = mongoose.model("fashion_db", fashionSchema);
module.exports = fashion;