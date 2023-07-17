import jwt_decode, { JwtPayload } from "jwt-decode"
// import { getEnviroments } from "../config/enviroments";

//crear un tipo en types de any a decodedToken
const decode = (token: string): JwtPayload | null => {
    try {
        return jwt_decode(token)
    } catch (err: any) {
        console.log("Error decoding token", err)
        return null
    }
}

export default decode;