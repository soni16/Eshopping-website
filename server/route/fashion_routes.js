var fashionCtrl = require("../controller/fashionCtrl");
module.exports= function(app){

app.post("/addFahion",function(req,res){
	fashionCtrl.create(req.body).then(function(resp){
		res.send(resp);
	}).catch(function(err){
		res.send(err);
	})
});

app.get("/fashion",function(req,res){
   fashionCtrl.readAll().then(function(resp){
   	//console.log(resp);
   	res.send(resp);
   })
});

app.get('/fashion/:id', function(req,res){
	fashionCtrl.readOne(req.params.id).then(function(resp){
		//console.log("then",resp);
		res.send(resp);
	})
});

app.delete("/fashion/:id",function(req,res){
	fashionCtrl.deleteData(req.params.id).then(function(resp){
		res.send(resp);       
	})
});

// app.put("/fashion/:id",function(req,res){
// 	fashionCtrl.updateData(req.params.id,req.body).then(function(resp){
// 		res.send(resp);
// 	})
// });


}
