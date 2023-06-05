const http  = require("node:http");
const fs = require("node:fs")

const server = http.createServer((req, res)=>{
    fs.readFile("./home.new.html", (err, data) => {
        if(err){
            console.log(err)
        }else{
            res.end(data)
        }
    })
})

server.listen(3000, ()=>{
    console.log("server up")
})