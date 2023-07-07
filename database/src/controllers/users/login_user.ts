import { Request, Response } from "express";
import { toLoginUser } from "../../middlewares/users/index";
import findAndAuthenticated from "../../config/DDBB/repository/users/findAndAuthenticated";

const loginUser = async (req: Request, res: Response) => {
    const newLogin = toLoginUser(req.body) //middleaware
    const login = await findAndAuthenticated(newLogin)
    return res.status(200)
        .header({ token: login.token })
        .json(`User: ${login.email} is logged`)
}

export default loginUser;