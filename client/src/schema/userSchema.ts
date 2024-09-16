import {z} from "zod";

export const userSigupSchema = z.object({
    fullName: z.string().min(1, " Full Name is required"),
    contact: z.string().min(10, "Contact number must be 10 digit"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long"),
})

export type SignupInputState = z.infer<typeof userSigupSchema>

export const userLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long"),
})

export type LoginInputState = z.infer<typeof userLoginSchema>
