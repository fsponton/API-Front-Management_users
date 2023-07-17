import { PrismaClient } from "@prisma/client"
import { Response, Request } from "express";

const prisma = new PrismaClient()

const getUsers = async (_req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    const updatedUsers = users.map(({ password, ...user }) => {
        return user
    })
    console.log(updatedUsers)
    return res.status(200).json({ status: "success", users: updatedUsers })
}

export default getUsers;