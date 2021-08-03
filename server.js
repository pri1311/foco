const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
	console.log("Database connected");
});

// const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/user");

// app.use("/exercises", exerciseRouter);
app.use("/user", userRouter);

app.use("/", (req, res) => {
	res.send("Hello World");
});

app.listen(5000, () => {
	console.log("Server Running");
});
