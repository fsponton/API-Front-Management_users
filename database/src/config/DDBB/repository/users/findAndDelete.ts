import { PrismaClient } from "@prisma/client";
import { User, EmailUser } from "../../../../types/types";


const prisma = new PrismaClient()

export default async (formFromRequest: EmailUser): Promise<User> => {
    const user = await prisma.user.findUnique({ where: { email: formFromRequest.email } })

    if (!user) throw new Error(`The user: ${formFromRequest.email} does not exist`)

    await prisma.user.delete({
        where: {
            email: formFromRequest.email
        }
    })

    return user

}