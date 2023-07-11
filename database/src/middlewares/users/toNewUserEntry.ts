import { NewUser } from "../../types/types";
import { parseToString } from "../../utils/users";

const toNewUserEntry = (object: any): NewUser => {
    console.log(object)
    const newEntry: NewUser = {
        name: parseToString(object.name),
        email: parseToString(object.email).toLocaleLowerCase(),
        password: parseToString(object.password)
    }
    return newEntry
}

export default toNewUserEntry;