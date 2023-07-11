import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { UpdateUser, User } from "../../../../types/types"


const prisma = new PrismaClient()

export default async (formFromRequest: UpdateUser): Promise<User> => {
    const result = await prisma.user.findUnique({ where: { email: formFromRequest.email } })

    if (!result) throw new Error(`The Email ${formFromRequest.email} does not exist on database`)

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(formFromRequest.password, salt)

    const userUpdated = await prisma.user.update({
        where: { email: formFromRequest.email },
        data: {
            name: formFromRequest.name,
            email: formFromRequest.email,
            password: hash,
            role: formFromRequest.role
        }
    })


    return userUpdated as User;
}

