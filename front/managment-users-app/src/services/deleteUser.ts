import axios from "axios"

export default async function deleteUser(props: any) {
    const { user, token } = props
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3005/delete_user',
            data: user,
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (err: any) {
        return err.response.data
    }
}