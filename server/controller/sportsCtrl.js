var s_service = require('../service/sports_service.js');
// Inserts a book to the db
exports.create = function(data){
	//console.log("data",data);
	return s_service.create(data);
	

};


exports.readAll = function () {
	return s_service.readAll();

};

var uid;

exports.readOne = function(uid)
{
	console.log('id',uid);
	return s_service.readOne(uid);
};

exports.deleteData = function(uid)
{
	return s_service.deleteData(uid);
};

exports.updateData = function(uid,data)
{
	return s_service.updateData(uid,data);
};





// exports.mobilesUpdate = function() {
//    return mobileServ.fetchData();
// }
