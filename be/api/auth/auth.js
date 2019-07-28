const express = require('express')
const router = express.Router()
let bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let mongoose = require('mongoose')
const auth = require('../../models/auth/auth_model')
const BCRYPT_SALT_ROUNDS = 12;
router.post('/signup',(req,res)=>{
    console.log("hey")
    console.log("user created")
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    auth.find({
        emailid:req.body.email
    }).then({

    })
    let model = new auth(req.body)
    console.log(model)
    // model.role = "user"
    console.log(req.body.role)
    bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
        auth.create({ username:req.body.username, password: hashedPassword,emailid:req.body.email,role:req.body.role }).then(user => {
        console.log(user)
          console.log('user created');
        //   res.json(req.body)
          let response={
            username:user.username,
            email:user.emailid,
            role: "user"
        }
        jwt.sign({user : response},'thisisthesecretkeyusedtoverifythejwtinsarcwebsite',(err,token)=>{
            res.json({
                token
            })
        })
        });
      });
})
router.post('/',(req,res)=>{
    console.log(req.token)
    jwt.verify(req.token,'thisisthesecretkeyusedtoverifythejwtinsarcwebsite',(err,authdata)=>{
        if(err){
            res.send("no")
            console.log("no")
            // res.sendStatus(403)
        } else{
            res.send("yes")
            console.log("yes")
            // res.json({
            //     authdata
            // })
        }
    })
})
router.get('/',verifytoken,(req,res)=>{
    console.log("it should print")
    console.log(req.token)
    // console.log(req.body)
    jwt.verify(req.token,'thisisthesecretkeyusedtoverifythejwtinsarcwebsite',(err,authdata)=>{
        if(err){
            res.send("no")
            // res.sendStatus(403)
        } else{
            // res.send("yes")
            res.json({
                authdata
            })
        }
    })
})
router.post('/login',(req,res)=>{
    console.log("sdfasf")
    console.log(req.body)
    auth.find({
        emailid:req.body.email
    })
        .then(doc => {
            console.log("sdfji")
            console.log(doc)
            console.log(req.body.password)
            console.log(doc[0].password)
            bcrypt.compare(req.body.password,doc[0].password).then(resp =>{
                if(resp!== true){
                    res.send("false")
                }else{
                    let response={
                        username:doc[0].username,
                        email:doc[0].emailid,
                        role: doc[0].role
                    }
                    jwt.sign({user : response},'thisisthesecretkeyusedtoverifythejwtinsarcwebsite',(err,token)=>{
                        res.json({
                            token
                        })
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
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

module.exports = router