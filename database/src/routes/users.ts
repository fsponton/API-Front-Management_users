import { Router } from 'express'
import { getUsers, registerUser, loginUser, updateUser, deleteUser, disableUser } from '../controllers/users/index'
const routerUsers = Router()



routerUsers.post("/newUser", registerUser)

routerUsers.post("/login", loginUser)

routerUsers.post("/updateUser", updateUser)

routerUsers.post("/deleteUser", deleteUser)

routerUsers.post("/disableUser", disableUser)

routerUsers.get("/", getUsers)


export default routerUsers;