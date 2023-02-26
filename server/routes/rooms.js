const express = require('express');
const { createRoom, updateRoom, deleteRoom, getRoom, getRooms, updateRoomAvailability } = require('../controllers/room.js');

const router = express.Router();
const { verifyAdmin } = require('../utils/verifyToken.js');

//CREATE
router.post('/:hotelid', verifyAdmin, createRoom);
//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET BY ID
router.get('/:id',getRoom);
//GET ALL
router.get('/', getRooms);




module.exports = router;