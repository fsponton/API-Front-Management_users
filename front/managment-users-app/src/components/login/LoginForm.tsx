import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import loginSchema from './_yupSchemas/loginSchema';
import loginUser from '../../services/login';

const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={loginSchema}
                onSubmit={async values => {
                    const result = await loginUser(values)
                    if (result.status === "success") {
                        Swal.fire({
                            icon: 'success',
                            title: `Hi ${result.msg}`
                        })
                        sessionStorage.setItem(`token`, JSON.stringify(result.user.token))
                        navigate("/dashboard")
                        return
                    }
                    Swal.fire({
                        icon: 'error',
                        title: `Email or password not found`,
                        text: `Check info`,
                    })
                }
                }
            >
                <Form>
                    <label htmlFor='email'>Email:</label>
                    <Field id="email" name="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor='password'>Password:</label>
                    <Field id="password" name="password" type="password" />
                    <ErrorMessage name="password" component="div" />
                    <p className="register-user text-left  ">
                        <a href="/new_user"> Register user</a>
                    </p>
                    <p className="forgot-password text-right  ">
                        <a href="/forgot_password">Forgot password?</a>
                    </p>
                    <button type="submit">Submit</button>
                </Form>

            </Formik >


        </div>
    );
};

export default LoginForm;