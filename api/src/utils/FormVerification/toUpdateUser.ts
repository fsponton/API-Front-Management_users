import { UpdateUser } from "../../types/types";
import { parseRole, parseToString } from "../users";

const toUpdateUser = ({ name, role, active, email }: UpdateUser): UpdateUser => {
    const updateUserEntry: UpdateUser = {
        name: parseToString(name),
        email: parseToString(email).toLocaleLowerCase(),
        role: parseRole(role).toLocaleLowerCase(),
        active: Boolean(active)
    }
    return updateUserEntry
}

export default toUpdateUser;