import { Request, Response } from "express";
import disable from "../../config/DDBB/repository/users/disable";
import { toCheckEmail } from "../../utils/FormVerification";


const disableUser = async (req: Request, res: Response) => {
    const { email } = req.body
    const userEntry = toCheckEmail(email)
    const userDisabled = await disable(userEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${userDisabled.email} fue deshabilitado, status del usuario: ${userDisabled.active}` })
}

export default disableUser;