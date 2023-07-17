import { parseToString } from "../../utils/users";
import { EmailUser } from "../../types/types";

const toCheckEmaill = (formEmail: string): EmailUser => {
    const emailParsed: EmailUser = {
        email: parseToString(formEmail).toLocaleLowerCase()
    }
    return emailParsed
}

export default toCheckEmaill;