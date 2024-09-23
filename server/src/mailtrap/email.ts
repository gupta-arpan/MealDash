import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail.ts";
import { sender, transport } from "./mailtrap.ts";

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const recipients = [
        email,
    ];
    try {
        await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "For Account Verification",
            html: htmlContent.replace("{verificationToken}", verificationToken),
            category: "Email Verification",
        })
    }
    catch (error) {
        console.log(error);
        throw new Error("Error sending verification email");
    }
}

export const sendWelcomeEmail = async (email: string, name: string) => {
    const recipients = [
        email,
    ];
    const htmlContent = generateWelcomeEmailHtml(name);
    try {
        await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Welcome to MealDash",
            html: htmlContent,
            templateVariables: {
                company_info_name: "MealDash",
                name: name,
            }
        })
    }
    catch (error) {
        console.log(error);
        throw new Error("Error sending welcome email");
    }
}

export const sendPasswordResetEmail = async (email:string, resetURL:string) => {
    const recipients = [
        email,
    ];
    const htmlContent = generatePasswordResetEmailHtml(resetURL);
    try {
        await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Reset your password",
            html: htmlContent,
            category: "Password Reset",
        })
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to reset password");
    }
}
export const sendResetSuccessEmail = async (email:string) => {
    const recipients = [
        email,
    ];
    const htmlContent = generateResetSuccessEmailHtml();
    try {
        await transport.sendMail({
            from: sender,
            to: recipients,
            subject: "Password reset successful",
            html: htmlContent,
            category: "Password Reset",
        })
    }
    catch (error) {
        console.log(error);
        throw new Error("Error sending password reset successful email");
    }
}