const express = require('express');
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } = require('../controllers/hotel.js');
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
router.get("/find/:id", getHotel);
//GET ALL
router.get('/', getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;