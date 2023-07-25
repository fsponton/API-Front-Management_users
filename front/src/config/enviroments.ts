import { Enviroments } from '../types/types'

export const getEnviroments = (): Enviroments => {
    return {
        PW_SESSION: 'keykey' as string,
        PORT: Number(3000)
    }
}

