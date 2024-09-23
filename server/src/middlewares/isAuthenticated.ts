import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

declare global {
    namespace Express{
        interface Request {
            id: string;
        }
    }
}
export const isAuthenticated = (req:Request, res: Response, next: NextFunction) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized" 
            });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
        if(!decode){
            return res.status(401).json({
                success: false,
                message: "Unauthorized" 
            });
        }
        req.id = decode.userId;
        next();
    }
    catch(error){
        return res.status(500).json({ message: "Internal server error" });
    }
}