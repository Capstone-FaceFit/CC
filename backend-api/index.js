import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoute);
app.get('/', (req, res) => {
    res.json({ message: 'Server is Running Yeay!' });
  });


app.listen(process.env.APP_PORT, ()=>{
    console.log('FaceFit API is ready');
})