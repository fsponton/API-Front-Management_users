import bcrypt from "bcryptjs"
import findAndResetPassword from "../../config/DDBB/repository/users/findAndResetPassword";
import { MyRequest } from "../../types/types";


const resetPassword = async (req: MyRequest, res: any) => {
    const { id } = req.token
    const { password } = req.body

    if (!password) { return res.status(404).send({ status: "error", msg: "Password necesaria" }) }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)

    const user = await findAndResetPassword({ id: id, passwordHash: hash })

    if (!user) { return res.status(404).send({ status: "error", msg: "Time expired" }) }
    return res.status(200).send({ status: "success", msg: `${user.email}, tu password ha sido actualizada` })
};

export default resetPassword;