import { parseToString } from "../users";
import { LoginUser } from "../../types/types";

const toLoginUserr = ({ email, password }: any): LoginUser => {
    const login: LoginUser = {
        email: parseToString(email).toLocaleLowerCase(),
        password: parseToString(password)
    }
    return login
}

export default toLoginUserr;