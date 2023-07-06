import { PrismaClient } from "@prisma/client";
import { User, EmailUser } from "../../../../types/types";


const prisma = new PrismaClient()

export default async (formFromRequest: EmailUser): Promise<User> => {
    const user = await prisma.user.findUnique({ where: { email: formFromRequest.email } })

    if (!user) throw new Error(`El usuario: ${formFromRequest.email} no existe`)

    await prisma.user.update({
        where: {
            email: formFromRequest.email
        },
        data: {
            active: false
        }
    })

    return user

}