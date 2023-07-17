import { Response } from "express";
import { getEnviroments } from "../../config/enviroments";
import jwt from "jsonwebtoken"

const loginUser = async (req: any, res: Response) => {
    const { user } = req

    const userForToken = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }

    const token = jwt.sign(userForToken, `${getEnviroments().SECRET_WORD}`, { expiresIn: 60 * 60 })


    return res.status(200)
        // .setHeader('Authorization', `Bearer ${token}`)
        .send({ status: "success", msg: ` ${userForToken.email} you are logged`, token: token })
}

export default loginUser;