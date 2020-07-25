const functions = require("firebase-functions");
const express = require("express");
const app = express();
const userRouter = require("./api/controllers/user_controller");
const bookingRouter = require("./api/controllers/booking_controller");

app.use(express.json());
app.use("/clinicList", bookingRouter);
app.use("/userList", userRouter);

exports.api = functions.https.onRequest(app);
exports.setupdb = functions.https.onRequest(require("./setup_database"));