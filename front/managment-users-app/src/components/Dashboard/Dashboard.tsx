import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import getUsers from '../../services/getUsers';
import { AiTwotoneDelete, AiOutlineEdit } from "react-icons/ai";

const Dashboard = () => {
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState<any[]>([]);

    const initStateModal = {
        editUser: false,
        disableUser: false,
        deleteUser: false
    }
    const [modal, setIsOpen] = useState(initStateModal)

    useEffect(() => {
        const token = JSON.parse(sessionStorage.getItem(`token`) as string)
        if (!token) {
            navigate('/')
        } else {
            getUsers(token)
                .then((users) => {
                    setAllUsers(users)
                })
                .catch((err) => {
                    console.log(`Error: ${err}`)
                }
                )
        }

    }, [])

    const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { name }: { name: string } = event.target as HTMLButtonElement;
        setIsOpen({
            ...modal,
            [name]: true
        })
        alert(`name: ${name}`)
    }

    const closeModal = () => {
        setIsOpen(initStateModal)
    }


    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'black' }}>
                    <table className="table table-hover">
                        <thead className=' table-dark '>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Role</th>
                                <th className="text-center">Active</th>
                                <th className="text-center">Disabled</th>
                                <th className="text-center">Update</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((u: any, index: number) => (
                                <tr key={index}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center">{u.name}</td>
                                    <td className="text-center">{u.email}</td>
                                    <td className="text-center">{u.role}</td>
                                    <td className="text-center">{u.active ? "Yes" : "No"}</td>
                                    <td className="text-center">boton disable</td>
                                    <td className="text-center" ><button onClick={openModal} name='editUser'><AiOutlineEdit /></button></td>
                                    <td className="text-center"><AiTwotoneDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            </div>
        </section>
    );
};

export default Dashboard;