import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { UserError } from "../../utils/Errors/index"
import { Response, NextFunction } from "express"
import { toParseCredentials } from "../../utils/FormVerification"
import { MyRequest } from "../../types/types"
const prisma = new PrismaClient()

//middleware verify Login User
const verifyPassword = async (req: MyRequest, _res: Response, next: NextFunction) => {
    const { email } = req.token
    const { password } = req.body

    const loginForm = toParseCredentials({ email, password }) //check info in form and parse

    const user = await prisma.user.findUnique({ where: { email: loginForm.email } })

    const encryptedPassword = user === null ? false
        : await bcrypt.compare(loginForm.password, user.password)

    if (!(user && encryptedPassword)) { throw new UserError('Password incorrecta', 401) }


    return next()
}

export default verifyPassword;



