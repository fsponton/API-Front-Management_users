
import { PrismaClient } from "@prisma/client"
import { getEnviroments } from "../../../enviroments";
import jwt from "jsonwebtoken"
import { EmailUser } from "../../../../types/types";

const prisma = new PrismaClient()

export default async (formFromRequest: EmailUser) => {
    let verificationLink
    const user = await prisma.user.findUnique({ where: { email: formFromRequest.email } })
    const token = jwt.sign({ id: user?.id }, `${getEnviroments().SECRET_WORD}`, { expiresIn: '10m' })


    verificationLink = `http://localhost:5173/reset_password/${token}` //link front end donde el user pone la pw y hace la request al back para resetear
    await prisma.user.update({
        where: { id: user?.id },
        data: { resetToken: token }
    })

    const slug = verificationLink.replaceAll('.', '/')
    const mailOption = {
        email: formFromRequest.email,
        slug
    }
    return mailOption;
}