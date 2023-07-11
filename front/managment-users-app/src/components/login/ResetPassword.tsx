import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import passwordSchema from './_yupSchemas/passwordSchema';
import resetPassword from '../../services/resetPasword';
import { useNavigate } from "react-router-dom"
import { ResetPW } from '../../types/types';

const ResetPasswordd: React.FC = () => {
    const { slug1, slug2, slug3 } = useParams()
    const navigate = useNavigate()
    const token = `${slug1}` + "." + `${slug2}` + "." + `${slug3}`
    return (
        <div >
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
                <Form>
                    <label htmlFor='password'>New Password:</label>
                    <Field id="password" name="password" />
                    <ErrorMessage name="password" component="div" />


                    <button type="submit">Submit</button>
                </Form>

            </Formik >
        </div >
    )
}

export default ResetPasswordd;