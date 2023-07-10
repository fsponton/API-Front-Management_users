export interface Enviroments {
    PW_SESSION: string | undefined,
    PORT: number
}

export interface User {
    id: string
    name: string
    email: string
    role: Role
    password: string
    active: boolean
    resetToken: string | null
}


// export type NewUser = Pick<User, 'name', 'email', 'password'>

export type LoginUser = Pick<Use, 'email', 'password'>

// export type UserLogged = Pick<User, 'id', 'name', 'email', 'role'>

// export type UpdateUser = Omit<User, 'id', 'resetToken', 'active'>

export type EmailUser = pick<User, 'email'>


export interface ResetPW {
    password: string
    token: string
}

