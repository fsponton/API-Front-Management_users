import { useState, useEffect } from 'react'
import getUsers from '../services/getUsers';

export const useUsers = (token: string) => {
    const [allUsers, setAllUsers] = useState<any[]>([]);

    useEffect(() => {
        if (token) {
            getUsers(token)
                .then((users) => {
                    setAllUsers(users)
                })
                .catch((err) => {
                    console.log(`Error: ${err}`)
                }
                )
        }
    }, [token])


    const obj = {
        allUsers,
        setAllUsers
    }
    return obj
}
