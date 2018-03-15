var cartCtrl = require("../controller/cartCtrl");
module.exports= function(app){

app.post("/addCarts",function(req,res){
	cartCtrl.create(req.body).then(function(resp){
		res.send(resp);
	}).catch(function(err){
		res.send(err);
	})
});

app.get("/allCarts",function(req,res){
   cartCtrl.readAll().then(function(resp){
   	//console.log(resp);
   	res.send(resp);
   })
});

app.get('/carts/:id', function(req,res){
	cartCtrl.readOne(req.params.id).then(function(resp){
		//console.log("then",resp);
		res.send(resp);
	})
});

app.delete("/carts/:id",function(req,res){
	cartCtrl.deleteData(req.params.id).then(function(resp){
		res.send(resp);       
	})
});

app.put("/carts/:id/:qty/:types",function(req,res){
	cartCtrl.updateData(req.params.id,req.params.qty,req.params.types).then(function(resp){
		res.send(resp);
	}).catch(function(err){
		res.send(err);
	})
});

app.put('/items/:id', function(req, res) {
       cartCtrl.findOneAndUpdate(req.params.id,req.body.count ).then(function(resp) {
           res.send(resp);
           console.log("hello world.",req.body.count);
       }).catch(function(err) {
           res.send("Error Occureddd...");
       })
   });


}


