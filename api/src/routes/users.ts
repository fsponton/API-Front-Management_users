import { Router } from 'express'
import { getUsers, registerUser, loginUser, updateUser, deleteUser, disableUser, forgotPassword, resetPassword } from '../controllers/users/index'
import { verifyToken, verifyExistence, verifyLogin, findUser } from '../middlewares/users'

const routerUsers = Router()

routerUsers.post("/new_user", verifyExistence, registerUser)

routerUsers.post("/login", verifyLogin, loginUser)

routerUsers.put("/update_user", verifyToken, findUser, updateUser)

routerUsers.post("/delete_user", verifyToken, findUser, deleteUser)

routerUsers.post("/disable_user", verifyToken, findUser, disableUser)

routerUsers.post("/forgot_password", forgotPassword)

routerUsers.put("/reset_password", verifyToken, resetPassword)

routerUsers.get("/", verifyToken, getUsers)

export default routerUsers;