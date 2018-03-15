var mongoose = require("mongoose");
var sportSchema = new mongoose.Schema({ 
  id: String,
  name:  String ,
  price: Number ,
  brand: String,
  sport : String, 
  features : {
   //Material: String,
   //color :String,
   //Weight:String,
  },
  image :[],
  reviews :[{
   title :String,
   comment : String,
  }]
});
var sports = mongoose.model("sports_db", sportSchema);
module.exports = sports;