var electCtrl = require("../controller/electCtrl");
module.exports= function(app){

app.post("/addMobiles",function(req,res){
	electCtrl.create(req.body).then(function(resp){
		res.send(resp);
	}).catch(function(err){
		res.send(err);
	})
});

app.get("/mobiles",function(req,res){
   electCtrl.readAll().then(function(resp){
   //	console.log(resp);
   	res.send(resp);
   })
});

app.get('/mobiles/:id', function(req,res){
	electCtrl.readOne(req.params.id).then(function(resp){
		//console.log("then",resp);
		res.send(resp);
	})
});

app.delete("/mobiles/:id",function(req,res){
	electCtrl.deleteData(req.params.id).then(function(resp){
		res.send(resp);       
	})
});

app.put("/mobiles/:id",function(req,res){
	electCtrl.updateData(req.params.id,req.body).then(function(resp){
		res.send(resp);
	})
});


}
