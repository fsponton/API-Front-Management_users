import React from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import registrationSchema from '../../utils/_yupSchemas/registrationSchema';
import { NewUser } from '../../types/types';
import registerUser from "../../services/registerUser";

const RegisterUser: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'black' }}>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ border: 'border-radius: 2rem' }}>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={registrationSchema}
                                onSubmit={async values => {
                                    const form: NewUser = {
                                        name: values.name,
                                        email: values.email,
                                        password: values.password
                                    }
                                    const result = await registerUser(form)
                                    if (result.status === "success") {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'User registered successfully',
                                            text: `${result.msg}`
                                        });
                                        navigate('/');
                                        return
                                    }
                                    Swal.fire({
                                        icon: 'error',
                                        title: `User Cant be Register`,
                                        text: `${result.message}`
                                    })

                                }}
                            >
                                <Form className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h3 className="mb-5 text-uppercase">Register</h3>

                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="name" className="form-label">Name:</label>
                                            <Field className="form-control form-control-lg" id="name" name="name" />
                                            <ErrorMessage name="name" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="email" className="form-label">Email:</label>
                                            <Field className="form-control form-control-lg" id="email" name="email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="password" className="form-label">Password:</label>
                                            <Field className="form-control form-control-lg" id="password" name="password" type="password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                                        <p className="mb-0 mt-4">
                                            <a href="/" className="text-white-50 fw-bold">Back to Login</a>
                                        </p>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterUser;