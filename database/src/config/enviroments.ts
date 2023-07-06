import dotenv from 'dotenv'
import { Enviroments } from '../types/types'
dotenv.config()


export const getEnviroments = (): Enviroments => {
    return {
        DATABASE_URL: process.env.DATABASE_URL as string,
        PORT: Number(process.env.PORT),
        SECRET_WORD: process.env.SECRET_WORD as string,
        USER_NODEMAILER: process.env.USER_NODEMAILER as string,
        PASSWORD_NODEMAILER: process.env.PASSWORD_NODEMAILER as string
    }
}

