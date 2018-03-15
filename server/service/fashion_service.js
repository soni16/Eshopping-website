var obj = require('../dbSchema/fashion_db');

var Q = require('q');

exports.create = function(allData){
	//console.log("allData",allData);
	var defer = Q.defer();
    obj.collection.insert(allData,function(err,data){
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
	console.log("uid",uid);
	var defer = Q.defer();
	obj.find({id:uid},function(err,data){
		if(err){
			response.err = err;
		} else {
			response.result = data;
		}
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
	obj.remove({id:uid},function(err){
		if (err){
			defer.reject(err);
		}else{
			defer.resolve("data is deleted");
		}
    });
    return defer.promise;
};

// exports.updateData = function(uid,req){
// 	var response = {
// 		err : null,
// 		result : null
// 	};
// 	var defer = Q.defer();
//     obj.findByIdAndUpdate({id:uid},req.body, function(err,data){
//     	if(err){
// 			response.err = err;
// 		} else {
// 			response.result = data;
// 		}
// 		 defer.resolve(response);
// 	});
// 	return defer.promise;
// } ;
