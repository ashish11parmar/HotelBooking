const user = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const register = async(req, res, next)=>{

    const { username, email, country, city,  phone, password } = req.body;

    if (!username, !email, !country, !city, !phone, !password) {
        return res.status(422).json({ error: "Plz filled property" });
    }

    try {
        const response = await user.findOne({ email: email })
      if(response){
          return res.status(422).json({ error: "user alresy register" });
      }

      // bcrypt password....
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new user({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await newUser.save();
        res.status(200).send('User created successfully...')
    } catch (error) {
        console.log(error);
        
    }
}

const login = async(req, res, next)=>{

    try {

        const login = await user.findOne({email: req.body.email});
        if(!login){
            res.status(400).send("Email not found...");
        }
        const ismatch = await bcrypt.compare(req.body.password, login.password);
        if(!ismatch){
            res.status(400).send("Wrong password or username");

        }

        //JWT token are generated....

        const token  = jwt.sign({id: login._id, isAdmin:login.isAdmin},
            process.env.SECRET_KEY)
            // console.log(token);

            const { password, isAdmin, ...otherDetails } = login._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
          }).status(200).json(login);
        
    } catch (err) {
        next(err)
    }
}


module.exports = {register, login}