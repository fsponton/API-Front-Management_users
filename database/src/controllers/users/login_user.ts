import { Request, Response } from "express";
import { toLoginUser } from "../../utils/users";

import findAndAuthenticated from "../../config/DDBB/repository/users/findAndAuthenticated";

export default async (req: Request, res: Response) => {
    try {
        const newLogin = toLoginUser(req.body)
        const login = await findAndAuthenticated(newLogin)
        return res.status(200)
            .header({ token: login.token })
            .json(`User: ${login.email} is logged`)
    } catch (err: any) {
        return res.status(404).json({ status: "error", msg: err.message })
    }
}

