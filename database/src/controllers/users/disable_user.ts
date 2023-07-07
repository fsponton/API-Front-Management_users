import { Request, Response } from "express";
import { toCheckEmail } from "../../middlewares/users";
import findAndDisable from "../../config/DDBB/repository/users/findAndDisable";


const disableUser = async (req: Request, res: Response) => {
    const userDisableEntry = toCheckEmail(req.body) //middleaware
    const user = await findAndDisable(userDisableEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${user.email} fue deshabilitado, status del usuario: ${user.active}` })

}

export default disableUser;