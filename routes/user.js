const express = require('express')
//const Article = require('./../models/user')
const router = express.Router()


router.get('/new', (req,res) => {
    res.render('partials/new')
    
})

/*
//Get
router.get('/:id',(req, res) => {

  });
*/

router.post('/', (req, res) =>{

})








module.exports = router;
