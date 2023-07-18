import { Request, Response } from "express";
import { toNewUserEntryy } from "../../utils/FormVerification";
import saveRegistration from "../../config/DDBB/repository/users/saveRegistration";



const registerUser = async (req: Request, res: Response) => {
    const newUserEntry = toNewUserEntryy(req.body)
    const result = await saveRegistration(newUserEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${result.email} fue creado` })
}

export default registerUser;

