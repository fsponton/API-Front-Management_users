import { Request, Response } from "express";
import { toLoginUser } from "../../middlewares/users/index";
import findAndAuthenticated from "../../config/DDBB/repository/users/findAndAuthenticated";

const loginUser = async (req: Request, res: Response) => {
    console.log("entro")
    const newLogin = toLoginUser(req.body) //middleaware
    const login = await findAndAuthenticated(newLogin)
    return res.status(200)
        .header({ token: login.token })
        .json({ status: "success", msg: ` ${login.email} you are logged`, user: login })
}

export default loginUser;