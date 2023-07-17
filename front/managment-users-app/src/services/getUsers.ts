import axios from "axios";


export default async function getUsers(token: string) {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3005/',
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(response.data.users)
        return response.data.users
    } catch (err: any) {
        return err.response.data
    }
}
