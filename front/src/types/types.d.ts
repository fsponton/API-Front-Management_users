export interface Enviroments {
    PW_SESSION: string,
    PORT: number
}

export interface User {
    id: string
    name: string
    email: string
    role: Role
    password: string
    active: boolean
}

export interface ResetPW {
    password: string
    token: string
}


export interface Modal {
    edit: boolean
    delete: boolean
    password: boolean
}

export interface Props {
    closeModal: () => void
    token: string
    user: EditUser
    modal: Modal
}



export interface tokenFunction {
    token: string
    closeModal: () => void

}

export type LoginUser = Pick<User, 'email', 'password'>

export type EmailUser = pick<User, 'email'>

export type NewUser = pick<User, 'name', 'email', 'password'>

export type EditUser = Pick<User, 'id', 'email', 'active', 'name', 'role'>

