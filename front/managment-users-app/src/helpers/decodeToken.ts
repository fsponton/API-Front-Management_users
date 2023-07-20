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


// <section className="vh-100 gradient-custom" >
//     <div className="container py-5 h-100" >
//         <div className="row d-flex justify-content-center align-items-center h-100" style = {{ backgroundColor: 'black' }}>
//             <button className='' > config < /button>
//                 < /div>
//                 < /div>
//                 < /section>