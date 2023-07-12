import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { UserError } from "../../utils/Errors/index"
import { Response, NextFunction } from "express"
import { toLoginUserr } from "../../utils/FormVerification"
import { LoginUser } from "../../types/types"
const prisma = new PrismaClient()

//middleware verify Login User
const verifyLogin = async (req: LoginUser, _res: Response, next: NextFunction) => {

    const loginForm = toLoginUserr(req.body) //check info in form and parse

    const user = await prisma.user.findUnique({ where: { email: loginForm.email } })

    const encryptedPassword = user === null ? false
        : await bcrypt.compare(loginForm.password, user.password)

    if (!(user && encryptedPassword)) { throw new UserError('Invalid Email or Password', 401) }

    req.user = user

    return next()
}

export default verifyLogin;



