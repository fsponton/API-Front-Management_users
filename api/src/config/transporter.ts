import nodemailer from "nodemailer"
import { getEnviroments } from '../config/enviroments'

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: getEnviroments().USER_NODEMAILER,
        pass: getEnviroments().PASSWORD_NODEMAILER
    },
});




