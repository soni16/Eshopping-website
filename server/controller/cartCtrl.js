var c_service = require('../service/cart_service.js');
// Inserts a book to the db
exports.create = function(data){
	//console.log("data",data);
	return c_service.create(data);
	

};


exports.readAll = function () {
	return c_service.readAll();

};

var uid;

exports.readOne = function(uid)
{
	console.log('id',uid);
	return c_service.readOne(uid);
};

exports.deleteData = function(uid)
{
	return c_service.deleteData(uid);
};
exports.findOneAndUpdate=function(id,body){
	console.log("ctrl",body);
return c_service.findAndUpdate(id,body);

}

exports.updateData = function(uid,qty,types)
{
	return c_service.updateData(uid,qty,types);
};





// exports.mobilesUpdate = function() {
//    return mobileServ.fetchData();
// }
