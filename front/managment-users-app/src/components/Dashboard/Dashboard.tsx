import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import getUsers from '../../services/getUsers';
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
const Dashboard = () => {
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState<any[]>([]);

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
    console.log(allUsers)
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'black' }}>
                    <table className="table table-hover">
                        <thead className=' table-dark '>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Active</th>
                                <th>Update</th>
                                <th>Disabled</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((u: any, index: number) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.role}</td>
                                    <td>{u.active ? "Yes" : "No"}</td>
                                    <td><GrUpdate /></td>
                                    <td>boton disable</td>
                                    <td><AiTwotoneDelete /></td>
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