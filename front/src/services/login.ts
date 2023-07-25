import axios from "axios";
import { LoginUser } from "../types/types";

export default async function loginUser(form: LoginUser) {
    try {
        const { email, password } = form
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3005/login',
            data: { email, password }
        })
        return response.data
    } catch (err: any) {
        return err.response.data
    }
}
