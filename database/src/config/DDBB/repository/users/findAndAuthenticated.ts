
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { getEnviroments } from '../../../enviroments'
import { LoginUser, UserLogged } from "../../../../types/types"

const enviroments = getEnviroments()

const prisma = new PrismaClient()

export default async (formFromRequest: LoginUser): Promise<UserLogged> => {

    const user = await prisma.user.findUnique({ where: { email: formFromRequest.email } })

    const encryptedPassword = user === null ? false
        : await bcrypt.compare(formFromRequest.password, user.password)

    if (!(user && encryptedPassword)) throw new Error('Invalid Email or Password')


    const userForToken = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }
    const token = jwt.sign(userForToken, `${enviroments.SECRET_WORD}`, { expiresIn: 60 * 60 })


    return ({ ...userForToken, token })

}

