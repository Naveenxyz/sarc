let mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'sarc'
mongoose.connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true
});
let posts_schema = new mongoose.Schema({
	id: {
		type: 'String'
	},
	stars: {
		type: 'Number'
	},
	stared: {
		type: 'Boolean'
	},
	bucket: {
		type: 'Boolean'
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
module.exports = mongoose.model('posts', posts_schema)