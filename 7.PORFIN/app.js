const http = require('http');
const mate = require('./matematicas.js');
const fs = require('fs');
const host = ''
const Port = 3000;

let server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        res.end("<h1>BASURA</h1>");
    }
    else if(req.url === '/hola'){
        fs.readFile('index.html','UTF-8',(err,data)=>{
            if(err) {
                res.writeHead(404);
                res.end('<h1>404</h1>')
            }else{
                res.end(data);
            }
           
        });
    }
    else{
        res.end("<h1>BASURA 404</h1>");
    }

}).listen(Port, host, ()=>{console.log("escuchando "+Port)});
