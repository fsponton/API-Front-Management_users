import axios from "axios";
import { LoginUser } from "../types/types";

export default async function loginUser(form: LoginUser) {
    try {
        const { email, password } = form
        const { data } = await axios
            .post(`http://localhost:3005/login`, {
                email,
                password
            })
        console.log(data)
        return data
    } catch (err: any) {
        return err.response.data
    }
}
