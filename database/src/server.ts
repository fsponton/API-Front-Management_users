import express from 'express'
import routerUsers from './routes/users';


export const server = express()
server.use(express.json())



//routes
server.use('/', routerUsers)


