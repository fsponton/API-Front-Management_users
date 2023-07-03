import { Request, Response } from "express";
import { toNewUserEntry } from "../../utils/users";
import findAndSave from "../../config/DDBB/repository/users/findAndSave";

export default async (req: Request, res: Response) => {
    try {
        const newUserEntry = toNewUserEntry(req.body)
        const newUser = await findAndSave(newUserEntry)
        return res.status(200).json({ status: "success", msg: `El usuario ${newUser.email} fue creado` })//{ status: "success", msg: `El usuario ${newUser.email} fue creado`, newUser }
    } catch (err: any) {
        return res.status(404).json({ status: "error", msg: err.message })
    }
}

