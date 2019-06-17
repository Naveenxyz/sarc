var app = require("express")();
var cors = require("cors");
const express = require("express");
var server = require("http").Server(app);
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
app.use("/api/posts",require("./api/posts/post_api"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
const PORT = process.env.PORT || 8080;
server.listen(PORT, "0.0.0.0", () =>
    console.log(`server started on port ${[PORT]}`)
);