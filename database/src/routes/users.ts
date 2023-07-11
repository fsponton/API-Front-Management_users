import { Router } from 'express'
import { getUsers, registerUser, loginUser, updateUser, deleteUser, disableUser, forgotPassword, resetPassword } from '../controllers/users/index'
import { verifyToken } from '../middlewares/users'

const routerUsers = Router()

routerUsers.post("/new_user", registerUser)

routerUsers.post("/login", loginUser)

routerUsers.post("/update_user", updateUser)

routerUsers.post("/delete_user", deleteUser)

routerUsers.post("/disable_user", disableUser)

routerUsers.post("/forgot_password", forgotPassword)

routerUsers.put("/reset_password", verifyToken, resetPassword)

routerUsers.get("/", getUsers)

console.log("entro333")
export default routerUsers;