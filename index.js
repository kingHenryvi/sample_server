// import express from "express";
// import cors from "cors";
// import "./loadEnvironment.mjs";
// import router from "./routes/record.mjs";

// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/record", router);

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Routes go here
app.all("*", (req, res) => {
  res.json({ "every thing": "is awesome" });
});

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
