import { parseToString } from "../../utils/users";
import { LoginUser } from "../../types/types";

const toLoginUser = (object: any): LoginUser => {
    const login: LoginUser = {
        email: parseToString(object.email).toLocaleLowerCase(),
        password: parseToString(object.password)
    }
    return login
}

export default toLoginUser;