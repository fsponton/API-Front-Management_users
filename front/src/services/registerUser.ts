import axios from "axios"
import { NewUser } from "../types/types"

export default async function registerUser(form: NewUser) {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3005/new_user',
            data: form
        })
        return response.data
    } catch (err: any) {
        return err.response.data
    }
}