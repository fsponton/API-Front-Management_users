import { Router } from 'express'
import { getUsers, registerUser, loginUser } from '../controllers/users/index'
const routerUsers = Router()


routerUsers.get("/", getUsers)

routerUsers.post("/newUser", registerUser)

routerUsers.post("/login", loginUser)


export default routerUsers;