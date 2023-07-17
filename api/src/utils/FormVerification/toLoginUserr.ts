import { parseToString } from "../users";
import { LoginUser } from "../../types/types";

const toLoginUserr = (object: any): LoginUser => {
    const login: LoginUser = {
        email: parseToString(object.email).toLocaleLowerCase(),
        password: parseToString(object.password)
    }
    return login
}

export default toLoginUserr;