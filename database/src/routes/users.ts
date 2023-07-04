import { Router } from 'express'
import { getUsers, registerUser, loginUser, updateUser } from '../controllers/users/index'
const routerUsers = Router()


routerUsers.get("/", getUsers)

routerUsers.post("/newUser", registerUser)

routerUsers.post("/login", loginUser)

routerUsers.post("/updateUser", updateUser)

export default routerUsers;