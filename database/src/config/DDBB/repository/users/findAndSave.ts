import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { NewUser, User } from "../../../../types/types"
import { UserError } from "../../../../utils/Errors"


const prisma = new PrismaClient()

const findAndSave = async (formFromRequest: NewUser): Promise<User> => {


    const result = await prisma.user.findUnique({ where: { email: formFromRequest.email } })

    if (result) throw new UserError(`Email: ${formFromRequest.email} already exist's`, 404)

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

export default findAndSave;