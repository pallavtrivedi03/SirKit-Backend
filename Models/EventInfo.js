var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventInfo = new Schema({

timeStamp:{
	type:String,
	required:false
},
location:{
	type:String,
	required:false
}
});

module.exports = mongoose.model('EventInfo', EventInfo);
