import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import loginSchema from '../../utils/_yupSchemas/loginSchema';
import loginUser from '../../services/login';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'black' }}>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ border: "border-radius: 2rem" }}>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={loginSchema}
                                onSubmit={async values => {
                                    const result = await loginUser(values);
                                    if (result.status === 'success') {
                                        Swal.fire({
                                            icon: 'success',
                                            title: `Hi ${result.msg}`,
                                        });
                                        sessionStorage.setItem('token', JSON.stringify(result.token));
                                        navigate('/dashboard');
                                    } else {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Email or password not found',
                                            text: 'Check info',
                                        });
                                    }
                                }}
                            >
                                <Form className='card-body p-5 text-center'>

                                    <div className='mb-md-5 mt-md-4 pb-5'>
                                        <h3 className=" mb-5 text-uppercase">Login</h3>

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


                                        <p className="small mb-5 pb-lg-2">
                                            <a href="/forgot_password" className='text-white-50'>Forgot password?</a>
                                        </p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Submit</button>

                                        <p className="mb-0 mt-4">
                                            <a href="/new_user" className='text-white-50 fw-bold'>Register user</a>
                                        </p>

                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default LoginForm;
