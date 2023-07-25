import { Request, Response } from "express";
import update from "../../config/DDBB/repository/users/update";
import { toUpdateUser } from "../../utils/FormVerification";

const updateUser = async (req: Request, res: Response) => {
    const { name, role, active, email } = req.body
    const userEntry = toUpdateUser({ name, role, active, email })
    const userUpdated = await update(userEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${userUpdated.email} fue actualizado` })
}

export default updateUser;