import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { UserError } from "../../utils/Errors/index"
import { Response, NextFunction } from "express"
import { toLoginUserr } from "../../utils/FormVerification"
import { LoginUser } from "../../types/types"
const prisma = new PrismaClient()

//middleware verify Login User
const verifyPassword = async (req: LoginUser, _res: Response, next: NextFunction) => {

    const { email } = req.token
    const { password } = req.body

    //parseCredentials > tologinuser
    const loginForm = toLoginUserr({ email, password }) //check info in form and parse

    const user = await prisma.user.findUnique({ where: { email: loginForm.email } })

    const encryptedPassword = user === null ? false
        : await bcrypt.compare(loginForm.password, user.password)

    if (!(user && encryptedPassword)) { throw new UserError('Invalid Password', 401) }

    return next()
}

export default verifyPassword;



