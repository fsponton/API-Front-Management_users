import { Request, Response } from "express";
import { toUpdateUser } from "../../middlewares/users/index";
import findAndUpdate from "../../config/DDBB/repository/users/findAndUpdate";

const updateUser = async (req: Request, res: Response) => {
    const updateUserEntry = toUpdateUser(req.body) //middleaware
    const userUpdated = await findAndUpdate(updateUserEntry)
    return res.status(200).json(`El usuario ${userUpdated.email} fue actualizado`)
}

export default updateUser;