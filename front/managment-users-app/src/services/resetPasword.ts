import axios from "axios"
import { ResetPW } from "../types/types"

export default async function resetPassword(form: ResetPW) {
    try {
        const { password, token } = form
        const response = await axios({
            method: 'put',
            url: 'http://localhost:3005/reset_password',
            data: { password },
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(response.data)
        return response.data
    } catch (err: any) {
        console.log(err.response.data)
        return err.response.data
    }
}