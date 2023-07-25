import { NewUser } from "../../types/types";
import { parseToString } from "../users";

const toNewUserEntry = ({ name, email, password }: NewUser) => {
    const newEntry: NewUser = {
        name: parseToString(name),
        email: parseToString(email).toLocaleLowerCase(),
        password: parseToString(password)
    }
    return newEntry
}

export default toNewUserEntry;