const express = require('express');
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels } = require('../controllers/hotel.js');
const Hotel = require('../models/Hotel.js');

const router = express.Router();

//CREATE
router.post('/', createHotel);
//UPDATE
router.put('/:id', updateHotel);

//DELETE
router.delete('/:id',deleteHotel );
//GET BY ID
router.get('/:id',getHotel);
//GET ALL
router.get('/', getHotels);

module.exports = router;