import jwt_decode from "jwt-decode"
import { User } from "../types/types"

//crear un tipo en types de any a decodedToken
const decode = (token: string): User | null => {
    try {
        return jwt_decode(token)
    } catch (err: any) {
        console.log("Error decoding token", err)
        return null
    }
}

export default decode;

