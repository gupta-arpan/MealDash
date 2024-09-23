import mongoose, { Document } from "mongoose";

type DeliveryDetails = {
    email: string;
    name: string;
    address: string;
    city: string;
}

type CartItems = {
    menuId: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

enum OrderStatus {
    pending = "pending",
    confirmed = "confirmed",
    preparing = "preparing",
    outfordelivery = "outfordelivery",
    delivered = "delivered"
}
export interface IOrder extends Document {
    user: mongoose.Schema.Types.ObjectId;
    restaurant: mongoose.Schema.Types.ObjectId;
    deliveryDetails: DeliveryDetails,
    cartItems: CartItems;
    totalAmount: number;
    status: OrderStatus
}

const orderSchema = new mongoose.Schema<IOrder>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    deliveryDetails:{
        email:{type:String, required:true},
        name:{type:String, required:true},
        address:{type:String, required:true},
        city:{type:String, required:true},
    },
    cartItems:[
        {
            menuId:{type:String, required:true},
            name:{type:String, required:true},
            image:{type:String, required:true},
            price:{type:Number, required:true},
            quantity:{type:Number, required:true},
        }
    ],
    totalAmount:Number,
    status:{
        type:String,
        enum: Object.values(OrderStatus),
        required:true
    }


}, { timestamps: true });
export const Order = mongoose.model("Order", orderSchema);