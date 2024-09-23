import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN!;

const transport = Nodemailer.createTransport(
    MailtrapTransport({
        token: TOKEN,
    })
);

const sender = {
    address: "hello@demomailtrap.com",
    name: "MealDash",
};

export {transport, sender};