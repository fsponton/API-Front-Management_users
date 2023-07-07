import { Request, Response } from "express";
import { toNewUserEntry } from "../../middlewares/users/index";
import findAndSave from "../../config/DDBB/repository/users/findAndSave";


const registerUser = async (req: Request, res: Response) => {
    const newUserEntry = toNewUserEntry(req.body) //middleaware
    const newUser = await findAndSave(newUserEntry)
    return res.status(200).json({ status: "success", msg: `El usuario ${newUser.email} fue creado` })
}

export default registerUser;









// export default async (req: Request, res: Response) => {
//     try {
//         const newUserEntry = toNewUserEntry(req.body) //middleaware
//         const newUser = await findAndSave(newUserEntry)
//         return res.status(200).json({ status: "success", msg: `El usuario ${newUser.email} fue creado` })
//     } catch (err: any) {
//         return res.status(404).json({ status: "error", msg: err.message })
//     }
// }

