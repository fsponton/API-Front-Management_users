import { Router } from 'express'
import { getUsers } from '../controllers/get_users'
const routerUsers = Router()


routerUsers.get("/", getUsers)


export default routerUsers;