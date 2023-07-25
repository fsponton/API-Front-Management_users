import { parseToString } from "../users";
import { AuthUser } from "../../types/types";

const toParseCredentials = ({ email, password }: AuthUser) => {
    const auth: AuthUser = {
        email: parseToString(email).toLocaleLowerCase(),
        password: parseToString(password)
    }
    return auth
}

export default toParseCredentials;