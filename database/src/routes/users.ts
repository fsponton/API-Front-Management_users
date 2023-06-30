import { Router } from 'express'
import { getUsers, registerUser } from '../controllers/index'
const routerUsers = Router()


routerUsers.get("/", getUsers)

routerUsers.post("/newUser", registerUser)


export default routerUsers;