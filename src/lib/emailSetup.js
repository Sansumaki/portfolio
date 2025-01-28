import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
    host: "smtp.fastmail.com",
    port: 587,
    secure: false,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.error(error);
    } else {
        console.log("Server is ready to make our message");
    }
});

export default transporter;