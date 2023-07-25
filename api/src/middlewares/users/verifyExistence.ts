import { PrismaClient } from "@prisma/client"
import { UserError } from "../../utils/Errors"
import { Response, NextFunction } from "express"
import { toCheckEmail } from "../../utils/FormVerification"
import { NewUser } from "../../types/types"
const prisma = new PrismaClient()

//middleware verify Exitence User
const verifyExistence = async (req: NewUser, _res: Response, next: NextFunction) => {

    const { email } = req.body

    const emailChecked = toCheckEmail(email) // email parsed to string and lowerdcased

    const result = await prisma.user.findUnique({ where: { email: emailChecked.email } })

    if (result) { throw new UserError(`El Email: ${email} ya existe en la DDBB`, 404) }

    return next()
}

export default verifyExistence;
















