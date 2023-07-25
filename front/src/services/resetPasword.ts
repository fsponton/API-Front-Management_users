import axios from "axios"
import { ResetPW } from "../types/types"

export default async function resetPassword({ password, token }: ResetPW) {
    try {
        const response = await axios({
            method: 'put',
            url: 'http://localhost:3005/reset_password',
            data: { password },
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (err: any) {
        return err.response.data
    }
}