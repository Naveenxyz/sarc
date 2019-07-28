let mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'sarc'
mongoose.connect("mongodb+srv://naveen:pass123@sarcdb-6vxmj.mongodb.net/sarc?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
let posts_schema = new mongoose.Schema({
	id: {
		type: 'String'
	},
	stars:  {
		type: [
			'String'
		]
    },
	bucket:  {
		type: [
			'String'
		]
    },
	description: {
		type: 'String'
	},
	title: {
		type: 'String'
	},
	image: {
		type: 'String'
	},
	bodyText: {
		type: 'String'
	},
	tags: {
		type: [
			'String'
		]
    },
    comments: {
        type: [
            'Mixed'
        ],
    }
})
posts_schema.plugin(timestamp)
posts_schema.index({'$**': 'text'});
module.exports = mongoose.model('posts', posts_schema)