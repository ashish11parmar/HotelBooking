const express = require('express');
const Hotel = require('../models/Hotel.js');

const router = express.Router();

//CREATE
router.post('/', async (req,res)=>{

    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        console.log(err);
    }

})
//UPDATE
//DELETE
//GET
//GET ALL

module.exports = router;