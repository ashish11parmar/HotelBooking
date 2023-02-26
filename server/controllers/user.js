const User = require('../models/User.js');


const createUser = async (req,res,next)=>{

    const newUser = new User(req.body)
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        next(err)
      }

};

const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

const deleteUser = async(req, res,next)=>{

    try {
        await User.findByIdAndDelete(
          req.params.id);
        res.status(200).json('User has been deleted');
      } catch (err) {
        next(err)
      }
};

const getUser =  async(req, res,next)=>{

    try {
      const getUser =   await User.findById(
          req.params.id);
        res.status(200).json(getUser);
      } catch (err) {
        next(err)
      }
};

const getUsers = async(req, res,next)=>{

    try {
      const getUsers =   await User.find();
        res.status(200).json(getUsers);
      } catch (err) {
        next(err)
      }
}

module.exports = {createUser, updateUser,deleteUser,getUser,getUsers }
