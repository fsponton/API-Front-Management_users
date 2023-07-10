import express from 'express'
import routerUsers from './routes/users';
import cors from "cors"

export const server = express()
server.use(express.json())
server.use(cors())

//routes
server.use('/', routerUsers)


