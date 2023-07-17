import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { NewUser, User } from "../../../../types/types"



const prisma = new PrismaClient()

const saveRegistration = async (formFromRequest: NewUser): Promise<User> => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(formFromRequest.password, salt)

    const user = await prisma.user.create({
        data:
        {
            name: formFromRequest.name,
            email: formFromRequest.email,
            password: hash
        }
    })

    return user as User;


}

export default saveRegistration;