import { Response } from "express";
import { toNewUserEntry } from "../../utils/FormVerification";
import saveRegistration from "../../config/DDBB/repository/users/saveRegistration";
import { NewUser } from "../../types/types";


const registerUser = async (req: NewUser, res: Response) => {
    const { name, email, password } = req.body
    const newUserEntry = toNewUserEntry({ name, email, password })
    const result = await saveRegistration(newUserEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${result.email} fue creado` })
}

export default registerUser;

