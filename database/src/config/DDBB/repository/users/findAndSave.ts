import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { NewUser, User } from "../../../../types/types"


const prisma = new PrismaClient()

export default async (formFromRequest: NewUser): Promise<User> => {

    const emailLower = formFromRequest.email.toLowerCase()
    const result = await prisma.user.findUnique({ where: { email: emailLower } })

    if (result) throw new Error(`El email: ${formFromRequest.email} ya se encuentra utilizado, seleccione otro`) //{ status: "error", msg: `User ${email} already exist's` }

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


    return user;
}

