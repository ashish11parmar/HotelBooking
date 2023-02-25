const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("first request");
  })
router.get('/register', (req, res) =>{
    res.send("register request");
  })

module.exports = router;