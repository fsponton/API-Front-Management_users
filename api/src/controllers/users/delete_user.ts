import { Request, Response } from "express";
import _delete from "../../config/DDBB/repository/users/delete";
import { toCheckEmail } from "../../utils/FormVerification";

const deleteUser = async (req: Request, res: Response) => {
    const { email } = req.body
    const userEntry = toCheckEmail(email)
    const userDeleted = await _delete(userEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${userDeleted.email} fue eliminado` })
}

export default deleteUser;