import { Request, Response } from "express";
import { toCheckEmail } from "../../middlewares/users";
import findAndDelete from "../../config/DDBB/repository/users/findAndDelete";

export default async (req: Request, res: Response) => {
    try {
        const userDeleteEntry = toCheckEmail(req.body) //middleaware
        const user = await findAndDelete(userDeleteEntry)
        return res.status(200).json({ status: "success", msg: `El usuario ${user.email} fue eliminado` })
    } catch (err: any) {
        return res.status(404).json({ status: "error", msg: err.message })
    }
}

