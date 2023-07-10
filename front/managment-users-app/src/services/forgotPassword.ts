import axios from "axios"
import { EmailUser } from "../types/types"

export default async function forgotPassword(email: EmailUser) {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3005/forgot_password',
            data: email
        })
        return response.data
    } catch (err: any) {
        return err.response.data
    }
}