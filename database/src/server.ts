import express, { NextFunction, Response } from 'express'
import routerUsers from './routes/users';
import cors from "cors"
export const server = express()
server.use(express.json())
server.use(cors())

//routes
server.use('/', routerUsers)


server.use((err: any, _req: any, res: Response, _next: NextFunction) => {
    // Error - others

    //Error - user
    if (err.name === "userError") {
        return res.status(err.code).send({
            error: true,
            errorName: err.name,
            message: err.message
        })
    }



    return res.status(err.code || 500).send({
        error: true,
        errorName: err.name,
        message: err.message,
    });
});