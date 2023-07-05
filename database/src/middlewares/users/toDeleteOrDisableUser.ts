import { parseToString } from "../../utils/users";
import { DeleteOrDisableUser } from "../../types/types";

const toDeleteOrDisableUser = (object: any): DeleteOrDisableUser => {
    const deleteOrDisableUser: DeleteOrDisableUser = {
        email: parseToString(object.email).toLocaleLowerCase()
    }
    return deleteOrDisableUser
}

export default toDeleteOrDisableUser;