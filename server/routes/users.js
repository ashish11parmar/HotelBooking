const express = require('express');
const { updateUser, createUser, deleteUser, getUser, getUsers } = require('../controllers/user');
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');
const router = express.Router();

//create user 
router.post('/', createUser);

// router.get('/ashish', verifyToken, (req, res, next)=>{
//     res.send('Hello from jwttoken');
// })
// router.get('/ashish/:id', verifyAdmin, (req, res, next)=>{
//     res.send('Hello from admin..');
// })

//update user 
router.put('/:id',verifyUser, updateUser);

//delete user 
router.delete('/:id',verifyUser, deleteUser);

//get user 
router.get('/:id',verifyUser, getUser);

//get all user 
router.get('/',verifyAdmin, getUsers);





module.exports = router;