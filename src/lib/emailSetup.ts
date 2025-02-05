import nodemailer from "nodemailer";
import { env } from "$env/dynamic/private";
import SMTPPool from 'nodemailer/lib/smtp-pool';

const transporter = nodemailer.createTransport(new SMTPPool({
    host: env.EMAIL_HOST,
    port: parseInt(env.EMAIL_PORT),
    secure: false,
    auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD
    }
} as SMTPPool.Options));

transporter.verify(function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("Server is ready to make our message");
    }
});

export default transporter;