import { useState } from 'react';
import { useNavigate } from "react-router";
import { useUsers } from '../../hooks/useUsers';
import { AiTwotoneDelete, AiOutlineEdit, AiTwotoneSetting } from "react-icons/ai";
import { encabezado } from '../../utils/encabezado';
import ThTable from '../../components/ThTable';
import ModalEditUser from '../../components/modalEditUser';
import { EditUser } from '../../types/types';
import TdTable from '../../components/TdTable';
import ModalDeleteUser from '../../components/modalDeleteUser';
import decode from '../../helpers/decodeToken';
import Swal from 'sweetalert2';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { getEnviroments } from '../../config/enviroments';
import ModalChangePassword from '../../components/modalChangePassword';
import getUsers from '../../services/getUsers';


const Dashboard = () => {
    const navigate = useNavigate();
    const token = JSON.parse(sessionStorage.getItem(getEnviroments().PW_SESSION) as string)
    const [user, setUser] = useState<EditUser | null>({})

    if (!token) {
        navigate('/')
    }
    const userLogged = decode(token)

    const initStateModal = {
        edit: false,
        delete: false,
        password: false
    }

    let { allUsers, setAllUsers }: any = useUsers(token)//custom-hook

    const [modal, setIsOpen] = useState(initStateModal)

    const openModal = (event: React.MouseEvent<HTMLButtonElement>, user: any) => {
        const { name }: { name: string } = event.currentTarget;

        if (name === 'password') {
            setIsOpen({
                ...modal,
                [name]: true
            })
            return
        }

        if (userLogged?.role != "admin") {
            Swal.fire({
                icon: 'warning',
                title: `Hi ${userLogged?.email},  you don't have permissions`,
            });
            return
        }
        setUser(user)
        setIsOpen({
            ...modal,
            [name]: true
        })
    }

    const closeModal = async () => {
        setIsOpen(initStateModal)
        setUser({})
        allUsers = await getUsers(token)
        setAllUsers(allUsers)
    }

    const logOff = () => {
        sessionStorage.removeItem(getEnviroments().PW_SESSION);
        navigate("/")
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center" style={{ backgroundColor: 'black' }}>
                    <div className="col"></div>

                    <div className="col-auto mb-5 ">
                        <div className="btn-group dropstart" >
                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><AiTwotoneSetting /></button>
                            <ul className="dropdown-menu dropdown-menu-secondary ">
                                <li >
                                    <button onClick={(ev) => openModal(ev, userLogged)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            paddingLeft: 10,
                                            cursor: 'pointer'
                                        }}
                                        name='password'
                                    >Change Password</button>
                                </li>
                                <li><hr className="dropdown-divider" /> </li>
                                <li onClick={() => logOff()} ><a className="dropdown-item" href="#">Log off</a></li>
                            </ul>
                        </div>
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
                <ModalChangePassword modal={modal} closeModal={closeModal} token={token} />
            </div>
        </section >
    );
};

export default Dashboard;