var f_service = require('../service/fashion_service.js');
// Inserts a book to the db
exports.create = function(data){
	//console.log("data",data);
	return f_service.create(data);
	

};

// 	Finds a all book in the db
exports.readAll = function () {
	return f_service.readAll();

};

var uid;

exports.readOne = function(uid)
{
	console.log('id',uid);
	return f_service.readOne(uid);
};

exports.deleteData = function(uid)
{
	return f_service.deleteData(uid);
};

// exports.updateData = function(uid,data)
// {
// 	return f_service.updateData(uid,data);
// };





// exports.mobilesUpdate = function() {
//    return mobileServ.fetchData();
// }
