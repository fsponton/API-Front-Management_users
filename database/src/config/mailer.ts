import { getEnviroments } from '../config/enviroments'
import { MailOptions } from '../types/types'

export const mailOptions = (email: string, verificationLink: string): MailOptions => {
    return {
        from: getEnviroments().USER_NODEMAILER,
        to: email,
        subject: "Reset password",
        text: `You have 10 minutes and a try the following link, to change password:
        <a href=${verificationLink}>${verificationLink}</a>
        <br/>
        <b>You have 10 minutes and one intent with this link</b>`
    }
}


