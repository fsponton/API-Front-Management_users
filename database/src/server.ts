import express, { Response } from 'express'
import routerUsers from './routes/users';
import cors from "cors"
export const server = express()
server.use(express.json())
server.use(cors())

//routes
server.use('/', routerUsers)

console.log("entro")
server.use((err: any, _req: any, res: Response) => {
    // Error - others
    console.log("entro666")
    console.log('ERRRORRR', err)
    return res.status(err.code || 500).send({
        error: true,
        errorName: err.name,
        message: err.message,
    });
});