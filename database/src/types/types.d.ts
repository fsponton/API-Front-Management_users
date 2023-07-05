export interface Enviroments {
    PORT: number
    DATABASE_URL: string
    SECRET_WORD: string
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

export type LoginUser = Pick<Use, 'email', 'password'>

export type UserLogged = Pick<User, 'id', 'name', 'email', 'role'>

export type UpdateUser = Omit<User, 'id', 'resetToken', 'active'>

export type DeleteOrDisableUser = pick<User, 'email'>

