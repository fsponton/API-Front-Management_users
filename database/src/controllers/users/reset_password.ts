// import { Response } from "express";
import bcrypt from "bcryptjs"
import findAndResetPassword from "../../config/DDBB/repository/users/findAndResetPassword";
import { CustomRequest } from "../../types/types";

const resetPassword = async (req: CustomRequest, res: any) => {
    const { userId, password } = req

    if (!password) { return res.status(404).send({ status: "error", msg: "Password needed" }) }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)

    const user = await findAndResetPassword({ id: userId, passwordHash: hash })

    if (!user) { return res.status(404).send({ status: "error", msg: "Time expired" }) }
    return res.status(200).send({ status: "success", msg: `${user.email}, your password has been updated` })

};

export default resetPassword;