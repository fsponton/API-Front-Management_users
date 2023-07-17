import { PrismaClient } from "@prisma/client";
import { User, EmailUser } from "../../../../types/types";


const prisma = new PrismaClient()

export default async (formFromRequest: EmailUser): Promise<User> => {

    return await prisma.user.delete({
        where: {
            email: formFromRequest.email
        }
    })

}