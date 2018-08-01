const http = require('http');
const mate = require('./matematicas.js');
http.get("http://jsonplaceholder.typicode.com/posts" , (resp) => {
    let data = '';
   
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
   
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data);
    });
   
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
console.log(mate);
console.log(http);

console.log(mate.sumar(2,3));