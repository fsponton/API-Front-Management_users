import { useState } from 'react';
import { useNavigate } from "react-router";
import { useUsers } from '../../hooks/useUsers';
import { AiTwotoneDelete, AiOutlineEdit } from "react-icons/ai";
import { encabezado } from '../../utils/encabezado';
import ThTable from '../../_components/ThTable';
import ModalEditUser from '../../_components/modalEditUser';
import { EditUser } from '../../types/types';


const Dashboard = () => {
    const navigate = useNavigate();
    const token = JSON.parse(sessionStorage.getItem(`token`) as string)
    const [userEdit, setUserEdit] = useState<EditUser | null>(null)

    if (!token) {
        navigate('/')
    }

    const allUsers = useUsers(token) //custom-hook

    const initStateModal = {
        edit: false,
    }
    const [modal, setIsOpen] = useState(initStateModal)


    const openModal = (event: React.MouseEvent<HTMLButtonElement>, user: any) => {
        const { name }: { name: string } = event.currentTarget;
        setUserEdit(user)
        setIsOpen({
            ...modal,
            [name]: true
        })
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
                                {encabezado.map((elem: string, index: number) => {
                                    return (
                                        <ThTable style={'text-center'} title={elem} key={index} />
                                    )
                                })}
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
                                    <td className="text-center" ><button onClick={(e) => openModal(e, u)} name='edit'><AiOutlineEdit /></button></td>
                                    <td className="text-center"><AiTwotoneDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            </div>
            <ModalEditUser modal={modal} closeModal={closeModal} userEdit={userEdit} />
        </section>
    );
};

export default Dashboard;