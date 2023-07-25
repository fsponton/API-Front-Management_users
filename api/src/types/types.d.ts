import { Request } from "express"

export interface DecodedToken extends Request {
    token: {
        id: string;
        name: string;
        email: string;
        role: string;
        active: boolean;
        iat: number;
        exp: number;
    }
}

export interface MyRequest extends Request {
    token: {
        id: string;
        name: string;
        email: string;
        role: string;
        active: boolean;
        iat: number;
        exp: number;
    }
}


export interface Enviroments {
    PORT: number
    DATABASE_URL: string
    SECRET_WORD: string
    USER_NODEMAILER: string
    PASSWORD_NODEMAILER: string
}

export interface MailOptions {
    from: string
    to: string
    subject: string
    html: string
}


export type Role = 'admin' | 'user'

export interface User {
    id: string
    name: string
    email: string
    role: Role
    password: string
    active: boolean
    resetToken: string | null
}


export type NewUser = Pick<User, 'name', 'email', 'password'>

export type AuthUser = Pick<Use, 'email', 'password'>

export type UserLogged = Pick<User, 'id', 'name', 'email', 'role'>

export type UpdateUser = Omit<User, 'id', 'resetToken', 'active', 'password'>

export type EmailUser = pick<User, 'email'>

export type ResetPassword = pick<User, 'id', 'password'>




