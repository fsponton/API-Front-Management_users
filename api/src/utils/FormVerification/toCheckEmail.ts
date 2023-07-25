import { parseToString } from "../users";
import { EmailUser } from "../../types/types";

const toCheckEmail = (formEmail: string): EmailUser => {
    const emailParsed: EmailUser = {
        email: parseToString(formEmail).toLocaleLowerCase()
    }
    return emailParsed
}

export default toCheckEmail;