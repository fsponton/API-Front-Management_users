import { parseToString } from "../../utils/users";
import { EmailUser } from "../../types/types";

const toCheckEmaill = (emailToParse: string): EmailUser => {
    const emailParsed: EmailUser = {
        email: parseToString(emailToParse).toLocaleLowerCase()
    }
    return emailParsed
}

export default toCheckEmaill;