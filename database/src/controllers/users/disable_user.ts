import { Request, Response } from "express";
import { toCheckEmail } from "../../middlewares/users";
import findAndDisable from "../../config/DDBB/repository/users/findAndDisable";

export default async (req: Request, res: Response) => {
    try {
        const userDisableEntry = toCheckEmail(req.body) //middleaware
        const user = await findAndDisable(userDisableEntry)
        return res.status(200).json({ status: "success", msg: `El usuario ${user.email} fue deshabilitado, status del usuario: ${user.active}` })
    } catch (err: any) {
        return res.status(404).json({ status: "error", msg: err.message })
    }
}

