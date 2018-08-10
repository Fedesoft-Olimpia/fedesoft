require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('cookie-session');

const app = express();


let arr = ["Tarea de prueba"];
// Midelware
app.use(morgan('dev'));
app.use(session({
    secret : 'node'
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

const users = require('./routers/user');


app.use('/users',users);
app.get('/', function (req, res) {
    res.render('index.ejs', {data : arr});
  });
  app.post('/add', function (req, res) {
      console.log(req.body);
      if(req.body.taskName !== ''){
        arr.push(req.body.taskName);
        res.redirect('/');
      }
    
  });
  
  app.get('/remove/:index', function(req,res){
    console.log(req.params.index);
    arr.splice(req.params.index, 1);
    res.redirect('/');
  })

app.listen(process.env.PORT , ()=>{
    console.log("Listen in port:", process.env.PORT )
});

