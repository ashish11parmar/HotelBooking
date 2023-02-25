const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const authRoute = require('./routes/auth.js');
const hotelsRoute = require('./routes/auth.js');
const usersRoute = require('./routes/auth.js');
const roomsRoute = require('./routes/auth.js');
const app = express(); 

// ==================================== //

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL

// ===================================== //
mongoose.set('strictQuery',true);
const connect = async () => {
    try {
      await mongoose.connect(DB_URL);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  //middlewares
  app.use(express.json());

  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/hotels", hotelsRoute);
  app.use("/api/rooms", roomsRoute);


  app.listen(PORT, () => {
    connect();
    console.log("Connected to backend.");
  });

