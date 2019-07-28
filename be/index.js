var app = require("express")();
var cors = require("cors");
const express = require("express");
var server = require("http").Server(app);
var io=require("socket.io")(server)
const jwt = require('jsonwebtoken')
const postssock = require("./api/posts/post_sockets")(io)
var clients = []
// require('./config/passport-auth')
setInterval(() => {
    test()
}, 1000000);
let test = () => console.log(`running on ${PORT}`)
app.use(express.json());
app.use(cors());
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use("/api/auth",require("./api/auth/auth"))
app.use("/api/home",require("./api/posts/post_api"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// for json web token
app.get('/test',(req,res)=>{
res.json({
    message:"welcome to test"
})
}
)
app.post('/test',verifytoken,(req,res)=>{
    console.log(req.token)
    jwt.verify(req.token,'secretkey',(err,authdata)=>{
        if(err){
            res.sendStatus(403)
        } else{
            res.json({
                message:"welcome to test secured",
                authdata
            })
        }
    })
    }
)
app.post('/api/login',(req,res)=>{
    // Mock user
    const user ={
        id: 1,
        username: 'naveen',
        email:'naveenkb1999@gmail.com'
    }

    jwt.sign({user : user},'secretkey',{expiresIn: '30m'},(err,token)=>{
        res.json({
            token
        })
    })
})

//Format of token

//verify token
function verifytoken(req,res,next){
    const bearer_header = req.headers['authorization']
    if(typeof(bearer_header)!= 'undefined'){
        const bearer = bearer_header.split(' ')
        const bearertoken = bearer[1]
        req.token = bearertoken
        next()
    }else{
        res.send("error not working")
    }
}






// //passport
// require('dotenv').config();
// const users = require('./models/users/user_schema')
// const passport = require('passport')
// const passport_jwt = require('passport-jwt')
// const jwtstrategy = passport_jwt.Strategy;
// const extractjwt = passport_jwt.ExtractJwt;
// const opts = {
//     jwtFromRequest: extractjwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.SECRET_OR_KEY
// }
// const strtgy = new jwtstrategy(opts, function(payload, next){
//     const user = null
//     next(null,user)
// })
// passport.use(strtgy)
// app.use(passport.initialize())








// app.get("/:id2/:id1",(req,res)=>{
//     res.send(req.params.id2+req.params.id1)
// })

// io.use(console.error("hello world"))
// io.use(function(socket, next){
//     if (socket.handshake.query && socket.handshake.query.token){
//       jwt.verify(socket.handshake.query.token, 'thisisthesecretkeyusedtoverifythejwtinsarcwebsite', function(err, decoded) {
//         if(err) return next(new Error('Authentication error'));
//         socket.decoded = decoded;
//         next();
//       });
//     } else {
//         next(new Error('Authentication error'));
//     }    
// })

io.use(function(socket, next){
    console.log("something")
    if (socket.handshake.query && socket.handshake.query.token){
      jwt.verify(socket.handshake.query.token, 'thisisthesecretkeyusedtoverifythejwtinsarcwebsite', function(err, decoded) {
        if(err) return next(new Error('Authentication error'));
        socket.decoded = decoded;
        next();
      });
    } else {
        next(new Error('Authentication error'));
    }    
  })
.on('connection', function(socket){
    // console.log(io.sockets.connected())
    console.log(`a user connected ${socket.id}`);
    socket.on('disconnect', function(){
        console.log(`user disconnected `);
    });
  })
const PORT = process.env.PORT || 8080;
server.listen(PORT, "0.0.0.0", () =>
    console.log(`server started on port ${[PORT]}`)
);
