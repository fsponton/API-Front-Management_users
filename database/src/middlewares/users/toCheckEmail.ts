import { parseToString } from "../../utils/users";
import { EmailUser } from "../../types/types";

const toCheckEmail = (object: any): EmailUser => {
    const deleteOrDisableUser: EmailUser = {
        email: parseToString(object.email).toLocaleLowerCase()
    }
    return deleteOrDisableUser
}

export default toCheckEmail;