import { PrismaClient } from "@prisma/client"
import { Response, Request } from "express";

const prisma = new PrismaClient()

const getUsers = async (_req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    return res.status(200).json({ status: "success", users })
}

export default getUsers;