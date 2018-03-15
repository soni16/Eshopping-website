var obj = require('../dbSchema/cart_db');

var Q = require('q');

exports.create = function(allData){
	//console.log("allData",allData);
	var defer = Q.defer();
    obj.insertMany(allData,function(err,data){
    	if (err){
    		defer.reject('Error in saving data');
    	} else {
    		defer.resolve(data);
    	}
    });
    return defer.promise;
};

//Finds all single book in the db
exports.readAll = function (req, res) {
	var response = {
		err:null,
		result:null
	};
	var defer = Q.defer();
	obj.find({},function(err,data){
		if(err){
			response.err = err;
		} else {
			response.result = data;
		}
		defer.resolve(response);
	});
	return defer.promise;
};

exports.readOne = function(uid) {
	var response = {
		err : null,
		result: null
	};
	console.log("uid12",uid);
	var defer = Q.defer();
	obj.find({id:uid},function(err,data){
		if(err){
			response.err = err;
		} else {
			response.result = data;
		}
		 console.log("dd",response);
		 defer.resolve(response);
	});
	return defer.promise;
};

exports.deleteData = function(uid) {
	var response = {
		err : null, 
		result : null
	};
	var defer = Q.defer();
	obj.remove({id:uid},function(err,data){
		if (err){
			response.err = err;
		}else{
			response.result = data;
		}
			 defer.resolve(response);
    });
     return defer.promise;
};
exports.findAndUpdate= function(uid,body) {
	var response = {
		err : null, 
		result : null
	};
	var defer = Q.defer();
    obj.findOneAndUpdate({ id: uid }, { $set: { quantity: body } }, { new: true },
       function(err, data) {
           if (err) {
               response.err = err;
           } else {
               response.result = data;
           }
           defer.resolve(response);
       });
   return defer.promise;
};

exports.updateData = function(uid,qty,types){
	var response = {
		err : null,
		result : null
	};
	var defer = Q.defer();
	var quant = '';
 //    obj.find({id:uid},function(err,data){
	// 	if(err){
	// 		console.log("err",uid);
	// 	} else {
	// 		console.log("Quant",data);
	// 		quant = data.quantity + 1;
	// 	}
	// });
	// console.log("quant")
	module.exports.readOne(uid).then(function(data){
		console.log("hii");
		console.log("length",data.result.length);
		if(data.result.length>0) {
			var quant = data.result[0].quantity + 1;
			console.log("quant",quant);
			console.log("data",data);
		    obj.findOneAndUpdate( {id:uid},
		    	{ $set: {id:uid, quantity:quant, types:types }},
		    	{ upsert:true }, 
		    	function(err, data) {
		    	console.log("quantity",quant);
		    	if(err){
		    		console.log("err1",uid);
					response.err = err;
				} else {
				console.log("err2",data);				
				 response.result=data;
					}
				});	
		} else {
		    obj.findOneAndUpdate( {id:uid},
		    	{ $set: {id:uid, quantity:qty, types:types }},
		    	{ upsert:true }, 
		    	function(err, data) {
		    	console.log("quantity",qty);
		    	if(err){
		    		console.log("err1",uid);
					response.err = err;
				} else {
				console.log("err2",data);				
				 response.result=data;
					}
				});				
		}
		
	});
	
	return defer.promise;
} ;


