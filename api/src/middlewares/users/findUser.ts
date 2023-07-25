import { PrismaClient } from "@prisma/client"
import { UserError } from "../../utils/Errors"
import { Response, NextFunction } from "express"
import { toCheckEmail } from "../../utils/FormVerification"

const prisma = new PrismaClient()

//middleware findUser
const findUser = async (req: any, _res: Response, next: NextFunction) => {

    const { email } = req.body

    const emailChecked = toCheckEmail(email) // email parsed to string and lowerdcased

    const result = await prisma.user.findUnique({ where: { email: emailChecked.email } })

    if (!result) { throw new UserError(`El Usuario: ${emailChecked}  no existe en la DDBB`, 404) }

    return next()
}

export default findUser;



