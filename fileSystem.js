// read file

const http = require('http');
const fs  = require('fs');

http.createServer(function(req , res){
    fs.readFile("README.md" , function(err , data){
        res.writeHead(200 , {'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(5000);