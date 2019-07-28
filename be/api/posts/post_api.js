const express = require('express');
const router = express.Router();
let mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// let oid=mongoose.ObjectId
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'sarc'
mongoose.connect("mongodb+srv://naveen:pass123@sarcdb-6vxmj.mongodb.net/sarc?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
const postmodel = require('../../models/posts/post_model')
const tagmodel = require('../../models/tags/tags_schmea.js')
// const postmodel = mongoose.model('posts')
var connection = mongoose.connection
// connection.once('open',()=>{
//     connection.db.collection("posts", function(err, collection){
//         // let oi = new oid('5d06be9dc0ba2728c3840eeb')
//         // console.log
//         collection.find({'id':'5d06be9dc0ba2728c3840eeb'}).toArray(function(err, data){
//             console.log(data); // it will print your collection data
//         })
//     });
// })
router.post('/posts',verifytoken, (req, res) => {
    jwt.verify(req.token,'thisisthesecretkeyusedtoverifythejwtinsarcwebsite',(err,authdata)=>{
        if(err){
            res.send("no")
            // res.sendStatus(403)
        }
    })
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    let model = new postmodel(req.body)
    console.log(req.body)
    model.stars=[]
    // model.stared=false
    model.bucket=[]
    model.id=model._id
    model.save()
        .then(doc => {
            console.log(model.createdAt)
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('/posts',verifytoken,(req, res) => {
    jwt.verify(req.token,'thisisthesecretkeyusedtoverifythejwtinsarcwebsite',(err,authdata)=>{
        if(err){
            res.send("no")
            // res.sendStatus(403)
        }
    })
    console.log("get req")
    postmodel.find({})
        .then(doc => {
            // console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('/posts/:id', (req, res) => {
    console.log("get request for id " + req.params.id)
    postmodel.find({
            _id: req.params.id
        })
        .then(doc => {
            // console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.post('/new_categorie',(req,res)=>{
    console.log(req.body)
    tagmodel.find({
        name:'alltags'
    })
    .then(resp=>{
        console.log(resp)
        resp[0].categories.push(req.body.new)
        res.send(resp[0])
        resp[0].save()
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.post('/categories',(req,res)=>{
    console.log(req.body)
    let model = new tagmodel(req.body)
    // console.log('requested catogeries')
    model.save()
    .then(doc=>{
        console.log(doc)
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.get('/categories',(req,res)=>{
    // console.log('requested catogeries')
    tagmodel.find({})
    .then(doc=>{
        console.log(doc)
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.get('/categories/:cat',(req,res)=>{
    console.log('requested '+req.params.cat+" via get")
    postmodel.find({tags:{"$in":[req.params.cat]}})
    .then(doc =>{
        // console.log(doc)
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.get('/search/:key', function(req,res){
    console.log(req.params.key)
    var regex = new RegExp(req.params.key, 'i');  // 'i' makes it case insensitive
    postmodel.find({$text: {$search: req.params.key}})
    // .skip(20)
    // .limit(10)
    .exec(function(err, docs) {
        console.log(docs)
        res.json(docs)
    });
});
function verifytoken(req,res,next){
    const bearer_header = req.headers['authorization']
    if(typeof(bearer_header)!= 'undefined'){
        const bearer = bearer_header.split(' ')
        const bearertoken = bearer[1]
        req.token = bearertoken
        next()
    }else{
        res.json({"response":"no"})
    }
}

module.exports = router;