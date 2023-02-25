const Hotel = require('../models/Hotel.js');


const createHotel = async (req,res,next)=>{

    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        next(err)
      }

};

const updateHotel = async(req, res,next)=>{

    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updateHotel);
      }catch (err) {
        next(err)
      }
};

const deleteHotel = async(req, res,next)=>{

    try {
        await Hotel.findByIdAndDelete(
          req.params.id);
        res.status(200).json('Hotel has been deleted///');
      } catch (err) {
        next(err)
      }
};

const getHotel =  async(req, res,next)=>{

    try {
      const getHotel =   await Hotel.findById(
          req.params.id);
        res.status(200).json(getHotel);
      } catch (err) {
        next(err)
      }
};

const getHotels = async(req, res,next)=>{

    try {
      const getHotels =   await Hotel.find();
        res.status(200).json(getHotels);
      } catch (err) {
        next(err)
      }
}

module.exports = {createHotel, updateHotel,deleteHotel,getHotel,getHotels }
