import axios from "axios"

export default async function updateUser(form: any) {
    try {
        const { name, role, active, email, token, password } = form
        const response = await axios({
            method: 'put',
            url: 'http://localhost:3005/update_user',
            data: { name, role, active, email, password },
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (err: any) {
        return err.response.data
    }
}