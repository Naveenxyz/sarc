let mongoose = require('mongoose')
const server = '127.0.0.1:27017'
const database = 'sarc'
mongoose.connect("mongodb+srv://naveen:pass123@sarcdb-6vxmj.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
const postmodel = require('../../models/posts/post_model')
var connection = mongoose.connection
const posts = io =>{
    io.on("connection",socket=>{
        socket.on("posts",(msg)=>{
            console.log(`${socket.id} made a request for all posts via sockets`)
            postmodel.find({})
            .then(doc => {
                // console.log(doc)
                socket.emit("posts_resp",doc)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        })
        socket.on("new_post",(msg)=>{
            if (!req.body) {
                return res.status(400).send('Request body is missing')
            }
            let model = new postmodel(req.body)
            console.log(req.body)
            model.stars=0
            model.stared=false
            model.bucket=false
            model.id=model._id
            model.save()
                .then(doc => {
                    console.log(model.createdAt)
                    if (!doc || doc.length === 0) {
                        socket.emit("posts_resp_new",doc)
                    }
                    res.status(201).send(doc)
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        })
        socket.on("categories",(msg)=>{
            console.log(`${socket.id} requested categories via sockets`)
            connection.db.collection("tags", function(err, collection){
                collection.find().toArray(function(err, data){
                socket.emit("categories_resp",data[0])
                })                
            })
        })
        socket.on("sigle_categorie",(msg)=>{
            console.log(`${socket.id} requested ${msg} via sockets`)
            postmodel.find({tags:{"$in":[req.params.cat]}})
            .then(doc =>{
                console.log(doc)
                socket.emit("single_categorie_resp",doc)
            })  
            .catch(err => {
                res.status(500).json(err)
            })
        })
    })
}
module.exports = posts