import { Request, Response } from "express";
import disable from "../../config/DDBB/repository/users/disable";
import { toCheckEmaill } from "../../utils/FormVerification";


const disableUser = async (req: Request, res: Response) => {
    const userEntry = toCheckEmaill(req.body) //middleaware
    const userDisabled = await disable(userEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${userDisabled.email} fue deshabilitado, status del usuario: ${userDisabled.active}` })

}

export default disableUser;