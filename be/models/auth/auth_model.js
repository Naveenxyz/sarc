let mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'sarc'
mongoose.connect("mongodb+srv://naveen:pass123@sarcdb-6vxmj.mongodb.net/sarc?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
let auth_model = new mongoose.Schema({
	role: {
		type: 'String'
	},
	username: {
		type: 'String'
	},
	password: {
		type: 'String'
	},
	emailid: {
		type: 'String'
	}
})
auth_model.plugin(timestamp)
module.exports = mongoose.model('usr',auth_model)