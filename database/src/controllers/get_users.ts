import { PrismaClient } from "@prisma/client"
import { Response } from "express";

const prisma = new PrismaClient()

export default async (_req: Express.Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json({ status: "success", users })
    } catch (err: any) {
        return res.status(404).json({ status: "error", msg: err.message })
    }
}

