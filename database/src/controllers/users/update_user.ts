import { Request, Response } from "express";
import { toUpdateUser } from "../../middlewares/users/index";
import findAndUpdate from "../../config/DDBB/repository/users/findAndUpdate";

export default async (req: Request, res: Response) => {
    try {
        const updateUserEntry = toUpdateUser(req.body)
        const userUpdated = await findAndUpdate(updateUserEntry)
        return res.status(200).json(`El usuario ${userUpdated.email} fue actualizado`)//{ status: "success", msg: `El usuario ${newUser.email} fue creado`, newUser }
    } catch (err: any) {
        return res.status(404).json({ status: "error", msg: err.message })
    }
}

