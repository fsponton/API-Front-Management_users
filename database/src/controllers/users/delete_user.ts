import { Request, Response } from "express";
import { toCheckEmail } from "../../middlewares/users";
import findAndDelete from "../../config/DDBB/repository/users/findAndDelete";

const deleteUser = async (req: Request, res: Response) => {
    const userDeleteEntry = toCheckEmail(req.body) //middleaware
    const user = await findAndDelete(userDeleteEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${user.email} fue eliminado` })
}

export default deleteUser;