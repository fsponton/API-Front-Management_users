import { Router } from 'express'
import { getUsers, registerUser, loginUser, updateUser, deleteUser, disableUser, forgotPassword } from '../controllers/users/index'

const routerUsers = Router()

routerUsers.post("/new_user", registerUser)

routerUsers.post("/login", loginUser)

routerUsers.post("/update_user", updateUser)

routerUsers.post("/delete_user", deleteUser)

routerUsers.post("/disable_user", disableUser)

routerUsers.post("/forgot_password", forgotPassword)

routerUsers.get("/", getUsers)


export default routerUsers;