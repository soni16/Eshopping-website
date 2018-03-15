var e_service = require('../service/elec_service.js');
// Inserts a book to the db
exports.create = function(data){
	//console.log("data",data);
	return e_service.create(data);
	

};


exports.readAll = function () {
	return e_service.readAll();

};

var uid;

exports.readOne = function(uid)
{
	console.log('id',uid);
	return e_service.readOne(uid);
};

exports.deleteData = function(uid)
{
	return e_service.deleteData(uid);
};

exports.updateData = function(uid,data)
{
	return e_service.updateData(uid,data);
};





// exports.mobilesUpdate = function() {
//    return mobileServ.fetchData();
// }
