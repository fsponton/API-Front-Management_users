import { PrismaClient } from "@prisma/client"
import { UpdateUser, User } from "../../../../types/types"


const prisma = new PrismaClient()

export default async (formFromRequest: UpdateUser): Promise<User> => {

    const userUpdated = await prisma.user.update({
        where: { email: formFromRequest.email },
        data: {
            name: formFromRequest.name,
            email: formFromRequest.email,
            active: formFromRequest.active,
            role: formFromRequest.role
        }
    })


    return userUpdated as User;
}

