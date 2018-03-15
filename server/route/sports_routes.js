var electCtrl = require("../controller/sportsCtrl");
module.exports= function(app){

app.post("/addSports",function(req,res){
	electCtrl.create(req.body).then(function(resp){
		res.send(resp);
	}).catch(function(err){
		res.send(err);
	})
});

app.get("/sports",function(req,res){
   electCtrl.readAll().then(function(resp){
   	//console.log(resp);
   	res.send(resp);
   })
});

app.get('/sports/:id', function(req,res){
	electCtrl.readOne(req.params.id).then(function(resp){
		//console.log("then",resp);
		res.send(resp);
	})
});

app.delete("/sports/:id",function(req,res){
	electCtrl.deleteData(req.params.id).then(function(resp){
		res.send(resp);       
	})
});

app.put("/sports/:id",function(req,res){
	electCtrl.updateData(req.params.id,req.body).then(function(resp){
		res.send(resp);
	})
});


}
