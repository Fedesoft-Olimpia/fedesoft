const router = require('express').Router();
const users = require('../api/data/data');
//const _ = require("lodash");
router.get('/all',(req,res)=>{
    res.send(users);
})

module.exports = router;