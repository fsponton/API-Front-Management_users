import React from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams } from 'react-router-dom';
import passwordSchema from '../../utils/_yupSchemas/passwordSchema';
import resetPassword from '../../services/resetPasword';
import Swal from "sweetalert2";
import { ResetPW } from '../../types/types';

const ResetPasswordd: React.FC = () => {
    const { slug1, slug2, slug3 } = useParams()
    const navigate = useNavigate()
    const token = `${slug1}` + "." + `${slug2}` + "." + `${slug3}`
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'black' }}>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ border: "border-radius: 2rem" }}>
                            <Formik
                                initialValues={{
                                    password: '',
                                }}
                                validationSchema={passwordSchema}
                                onSubmit={async values => {
                                    const form: ResetPW = {
                                        password: values.password,
                                        token: token
                                    }
                                    const result = await resetPassword(form)
                                    if (result.status === "success") {
                                        Swal.fire({
                                            icon: 'success',
                                            title: `Updated Password`,
                                            text: `${result.msg}`,
                                        })
                                        navigate("/")
                                        return
                                    }
                                    Swal.fire({
                                        icon: 'error',
                                        title: `Password Cant be Updated`
                                    })
                                }}
                            >
                                <Form className='card-body p-5 text-center'>
                                    <div className='mb-md-5 mt-md-4 pb-5'>
                                        <h3 className="mb-5 text-uppercase">Reset Password</h3>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor='password' className="form-label">New Password:</label>
                                            <Field className="form-control form-control-lg" id="password" name="password" type="password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Submit</button>
                                </Form>
                            </Formik >
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ResetPasswordd;