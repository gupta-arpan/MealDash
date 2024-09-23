import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db/connectDB.ts";
import userRoutes from "./routes/user.route.ts"
import restaurantRoutes from "./routes/restaurant.route.ts"
import menuRoutes from "./routes/menu.route.ts"

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json({limit: '10mb'}));
const coresOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(coresOptions));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/restaurant', restaurantRoutes);
app.use('/api/v1/menu', menuRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on port ${PORT}`);
});
