import { PrismaClient } from "@prisma/client"
import { UpdateUser, User } from "../../../../types/types"


const prisma = new PrismaClient()

export default async ({ name, role, active, email }: UpdateUser): Promise<User> => {
    const userUpdated = await prisma.user.update({
        where: { email },
        data: {
            name: name,
            email: email,
            active: active,
            role: role
        }
    })

    return userUpdated as User;
}

