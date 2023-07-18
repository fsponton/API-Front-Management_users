import { EditUser } from '../types/types'
import { useState } from 'react';


const FormEditUser = (props: EditUser) => {
    const { userEdit } = props

    const [input, setInput] = useState({
        id: userEdit.id,
        name: userEdit.name,
        email: userEdit.email,
        role: userEdit.role,
        active: userEdit.active
    })

    return (
        <><div>formEditUser</div>
            <div><p>{userEdit.id}</p></div>
        </>
    )
}


export default FormEditUser;