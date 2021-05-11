//jshint esversion:6

const express = require("express");

//connecting database
require("./config/dbConnect");

const authRouter = require("./routers/authRouter");
const guideAuthRouter = require("./routers/guideAuthRouter");
const userRouter = require("./routers/userRouter");
const guideRouter = require("./routers/guideRouter");

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/guides", guideRouter);
app.use("/auth", authRouter);
app.use("/guideAuth", guideAuthRouter);

module.exports = app.listen(4001, () => console.log("Server up and running"));
