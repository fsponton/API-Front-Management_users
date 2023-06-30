import { NewUser } from "../types/types";


const parseToString = (valueFromRequest: any): string => {
    if (!isString(valueFromRequest)) {
        throw new Error('incorrect or missing comment')
    }
    return valueFromRequest
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}


const toNewUserEntry = (object: any): NewUser => {
    const newEntry: NewUser = {
        name: parseToString(object.name),
        email: parseToString(object.email),
        password: parseToString(object.password)
    }
    return newEntry
}

export default toNewUserEntry;