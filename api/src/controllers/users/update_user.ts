import { Request, Response } from "express";
import update from "../../config/DDBB/repository/users/update";
import { toUpdateUserr } from "../../utils/FormVerification";

const updateUser = async (req: Request, res: Response) => {
    const userEntry = toUpdateUserr(req.body) //middleaware
    const userUpdated = await update(userEntry)
    return res.status(200).json(`El usuario ${userUpdated.email} fue actualizado`)
}

export default updateUser;