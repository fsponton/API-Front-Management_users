import { Request, Response } from "express";
import { toCheckEmail } from "../../middlewares/users";
import { transporter } from "../../config/transporter"
import { mailOptions } from "../../config/mailer"
import findAndCreateMailOption from "../../config/DDBB/repository/users/findAndCreateMailOption";


export default async (req: Request, res: Response) => {
    try {
        const userEmailEntry = toCheckEmail(req.body) //middleware
        const mailOption = await findAndCreateMailOption(userEmailEntry)

        transporter.sendMail(mailOptions(mailOption.email, mailOption.verificationLink), (err) => {
            if (err) { return process.exit(1); }
        })
        return res.status(200).send({ status: "success", msg: `Se envio un enlace al email: ${mailOption.email}` })
    } catch (err: any) {
        return res.status(404).json({ status: "error", msg: err.message })

    }
}