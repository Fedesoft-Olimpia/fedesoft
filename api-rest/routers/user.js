const router = require('express').Router();
const users = require('../api/data/data');
const _ = require("lodash");



router.get('/',(req,res)=>{
    res.json(users);
});

router.get('/:id',(req,res)=>{
    res.json(req.user);
});

router.post('/add',(req,res)=>{

    let user = req.body;
    console.log(user);
    const createdUser = users.push(user);
    if(!createdUser){
        response.json({'error':'El usuario no se creo'});
    }
    res.send('ok');
});

router.param('id',(req, res, next, id) =>{
    console.log("Middleware", id);
    const user = _.find(users,{'id':+id})
    if(user)
        req.user = user;
    else
        res.status(404).json({'error':'ID no se encontro'});
    next();
});

module.exports = router;