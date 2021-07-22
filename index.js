import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);

//const CONNECTION_URL = "mongodb://localhost/tatt_appt"
const PORT = process.env.PORT || 9000;

mongoose.connect(
  process.env.CONNECTION_URL || "mongodb://localhost/tatt_appt",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile("frontend/build/index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running..");
  });
}

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
