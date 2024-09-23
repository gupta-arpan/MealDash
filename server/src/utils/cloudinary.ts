import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_USERNAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_API_SECRET
})

export default cloudinary