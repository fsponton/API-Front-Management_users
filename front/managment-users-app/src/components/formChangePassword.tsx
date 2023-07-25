import { Formik, Form, Field, ErrorMessage } from 'formik';
import passwordSchema from '../utils/_yupSchemas/passwordSchema';
import Swal from 'sweetalert2';
import { ResetPW } from '../types/types';
import resetPassword from '../services/resetPasword';
import { useNavigate } from "react-router-dom"
import { getEnviroments } from '../config/enviroments';
import { tokenFunction } from '../types/types';

const FormChangePassword = ({ token }: tokenFunction) => {

    const navigate = useNavigate()
    return (
        <>
            <Formik
                initialValues={{
                    password: ''
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
                        sessionStorage.removeItem(getEnviroments().PW_SESSION)
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
                    <div className='mb-md-5 mt-md-4 pb-5 '>
                        <h3 className='mb-5 text-uppercase'>New Password</h3>
                        <div className='form-outline form-white mb-4'>
                            <Field className='form-control form-control-lg' id='password' name='password' type="password" />
                            <ErrorMessage name='password' component='div' className='text-danger' />
                        </div>

                        <button className='btn btn-outline-light btn-lg px-5 ' type='submit'>
                            Confirm
                        </button>

                    </div>
                </Form>
            </Formik >
        </>

    )
}

export default FormChangePassword;  