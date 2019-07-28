let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://naveen:pass123@sarcdb-6vxmj.mongodb.net/sarc?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
let tag = new mongoose.Schema(
    {
        name: {
            type: 'String'
        },
        categories: {
            type: [
                'String'
            ]
        }
    }
)
module.exports = mongoose.model('tags',tag)