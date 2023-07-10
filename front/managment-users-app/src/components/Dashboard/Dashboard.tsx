// import React, { useState } from 'react';
// import axios from 'axios';

const Dashboard = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Envia una solicitud POST al backend de Strapi para autenticar al usuario
    //         const response = await axios.post('http://localhost:1337/auth/local', {
    //             identifier: email,
    //             password: password
    //         });

    //         // Manejar la respuesta exitosa y guardar el token de acceso en el almacenamiento local
    //         console.log('Token de acceso:', response.data.jwt);
    //     } catch (error) {
    //         // Manejar errores de autenticación
    //         console.error('Error al iniciar sesión:', error);
    //     }
    // };

    return (

        <div>


            <p>testing Dashboard</p>
            {/* <form onSubmit={handleSubmit} >
                <h2>Iniciar sesión < /h2>
                    < div >
                        <label htmlFor="email" > Correo electrónico: </label>
                        < input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        < /div>
                        < div >
                            <label htmlFor="password" > Contraseña: </label>
                            < input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            < /div>
                            < button type="submit" > Iniciar sesión < /button>
                                < /form>
                                < /div> */}

        </div>
    );
};

export default Dashboard;