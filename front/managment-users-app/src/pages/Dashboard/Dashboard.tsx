import { useState } from 'react';
import { useNavigate } from "react-router";
import { useUsers } from '../../hooks/useUsers';
import { AiTwotoneDelete, AiOutlineEdit } from "react-icons/ai";
import { encabezado } from '../../utils/encabezado';
import ThTable from '../../components/ThTable';
import ModalEditUser from '../../components/modalEditUser';
import { EditUser } from '../../types/types';
import TdTable from '../../components/TdTable';
import ModalDeleteUser from '../../components/modalDeleteUser';
import decode from '../../helpers/decodeToken';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const navigate = useNavigate();
    const token = JSON.parse(sessionStorage.getItem(`token`) as string)
    const [user, setUser] = useState<EditUser | null>(null)

    if (!token) {
        navigate('/')
    }
    const userLogged = decode(token)

    const initStateModal = {
        edit: false,
        delete: false
    }

    const allUsers = useUsers(token, initStateModal) //custom-hook

    const [modal, setIsOpen] = useState(initStateModal)

    const openModal = (event: React.MouseEvent<HTMLButtonElement>, user: any) => {
        if (userLogged?.role != "admin") {
            Swal.fire({
                icon: 'warning',
                title: `Hi ${userLogged?.email},  your role is not admin and your don't have permissions`,
            });
            return
        }
        const { name }: { name: string } = event.currentTarget;
        setUser(user)
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
                <div className="row d-flex align-items-center" style={{ backgroundColor: 'black' }}>
                    <div className="col"></div>
                    <div className="col-auto mb-5">
                        <button className="btn btn-secondary btn-sm">config</button>
                    </div>
                    <div className="justify-content-center align-items-center mt-5" style={{ backgroundColor: 'black' }}>
                        <table className="table table-hover justify-content-center">
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
                                    <tr key={index} >
                                        <TdTable style={'text-center'} info={(index + 1).toString()} />
                                        <TdTable style={'text-center'} info={u.email} />
                                        <TdTable style={'text-center'} info={u.name} />
                                        <TdTable style={'text-center'} info={u.role} />
                                        <TdTable style={'text-center fw-semibold'} info={u.active ? "Yes" : "No"} />
                                        <TdTable style={'text-center'}  >
                                            <button onClick={(ev) => openModal(ev, u)} name='edit'
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    padding: 0,
                                                    cursor: 'pointer'
                                                }}><AiOutlineEdit />
                                            </button>
                                        </TdTable>
                                        <td className="text-center">
                                            <button onClick={(ev) => openModal(ev, u)} name='delete'
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    padding: 0,
                                                    cursor: 'pointer'
                                                }}>
                                                <AiTwotoneDelete />
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div >
                </div>
                <ModalEditUser modal={modal} closeModal={closeModal} user={user} token={token} />
                <ModalDeleteUser modal={modal} closeModal={closeModal} user={user} token={token} />
            </div>
        </section >
    );
};

export default Dashboard;