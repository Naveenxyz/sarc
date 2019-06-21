const express = require('express')
const router = express.Router()
let bcrypt = require('bcrypt')
let mongoose = require('mongoose')
const auth = require('../../models/auth/auth_model')
const BCRYPT_SALT_ROUNDS = 12;
router.post('/signup',(req,res)=>{
    console.log("user created")
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    auth.find({
        emailid:req.body.email
    }).then({

    })
    let model = new auth(req.body)
    console.log(req.body)
    bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
        auth.create({ username:req.body.username, password: hashedPassword,emailid:req.body.email }).then(user => {
          console.log('user created');
          res.json(req.body)
        });
      });
})
router.post('/login',(req,res)=>{
    console.log(req.body)
    auth.find({
        emailid:req.body.email
    })
        .then(doc => {
            console.log(doc)
            console.log(req.body.password)
            console.log(doc[0].password)
            bcrypt.compare(req.body.password,doc[0].password).then(resp =>{
                if(resp!== true){
                    res.send("false")
                }else{
                    let response={
                        username:doc[0].username,
                        email:doc[0].emailid
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
module.exports = router