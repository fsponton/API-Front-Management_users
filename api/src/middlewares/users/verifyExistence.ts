import { PrismaClient } from "@prisma/client"
import { UserError } from "../../utils/Errors"
import { Response, NextFunction } from "express"
import { toCheckEmaill } from "../../utils/FormVerification"

const prisma = new PrismaClient()

//middleware verify Exitence User
const verifyExistence = async (req: any, _res: Response, next: NextFunction) => {
    const { email } = req.body

    const emailChecked = toCheckEmaill(email) // email parsed to string and lowerdcased

    const result = await prisma.user.findUnique({ where: { email: emailChecked.email } })

    if (result) { throw new UserError(`Email: ${email} already exist's`, 404) }

    return next()
}

export default verifyExistence;
















