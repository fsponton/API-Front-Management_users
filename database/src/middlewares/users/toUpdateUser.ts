import { UpdateUser } from "../../types/types";
import { parseRole, parseToString } from "../../utils/users";

const toUpdateUser = (object: any): UpdateUser => {
    const updateUserEntry: UpdateUser = {
        name: parseToString(object.name),
        email: parseToString(object.email).toLocaleLowerCase(),
        role: parseRole(object.role).toLocaleLowerCase(),
        password: parseToString(object.password)
    }
    return updateUserEntry
}

export default toUpdateUser;