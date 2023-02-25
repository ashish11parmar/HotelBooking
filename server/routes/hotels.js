const express = require('express');
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels } = require('../controllers/hotel.js');
const Hotel = require('../models/Hotel.js');
const { verifyAdmin } = require('../utils/verifyToken.js');

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);
//UPDATE
router.put('/:id',verifyAdmin, updateHotel);

//DELETE
router.delete('/:id',verifyAdmin, deleteHotel );
//GET BY ID
router.get('/:id',getHotel);
//GET ALL
router.get('/', getHotels);

module.exports = router;