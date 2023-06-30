
// import jwt from "jsonwebtoken"
// import bcrypt from "bcryptjs"
// import { PrismaClient } from "@prisma/client"
// import { getEnviroments } from '../../../enviroments'

// const enviroments = getEnviroments()

// const prisma = new PrismaClient()

// export default async (formFromRequest: NewUser): User => {
//     const emailLower = formFromRequest.email.toLowerCase()
//     const user = await prisma.user.findUnique({ where: { email: emailLower } })

//     const encryptedPassword = user === null ? false
//         : await bcrypt.compare(formFromRequest.password, user.password)

//     if (!(user && encryptedPassword)) throw new Error('')
//     return res.status(401).send({ status: "error", msg: 'Usuario o password incorrecto' });

//     const userForToken = {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         role: user.role
//     }
//     const token = jwt.sign(userForToken, `${enviroments.SECRET_WORD}`, { expiresIn: 60 * 60 })

//     return ({ ...userForToken, token })
//     // return ({ token })
// }

