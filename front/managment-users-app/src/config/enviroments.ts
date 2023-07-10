import dotenv from 'dotenv'
import { Enviroments } from '../types/types'
dotenv.config()


export const getEnviroments = (): Enviroments => {
    return {
        PW_SESSION: process.env.PW_SESSION as string,
        PORT: Number(process.env.PORT)
    }
}

