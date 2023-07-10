import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from "sweetalert2";
import emailSchema from './_yupSchemas/emailSchema';
import forgotPassword from '../../services/forgotPassword';
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
    const navigate = useNavigate()

    return (
        <div className='col d-flex justify-content-center' >
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={emailSchema}
                onSubmit={async values => {
                    const result = await forgotPassword(values)
                    if (result.status === "success") {
                        Swal.fire({
                            icon: 'success',
                            title: `An email was sent to ${values.email}`
                        })
                        navigate("/")
                        return
                    }
                    Swal.fire({
                        icon: 'error',
                        title: `Email: ${values.email} no exist's on database's`
                    })
                }}
            >
                <Form>
                    <label htmlFor='email'>Email:</label>
                    <Field id="email" name="email" />
                    <ErrorMessage name="email" component="div" />

                    <button type="submit">Submit</button>
                </Form>

            </Formik >
        </div >
    )
}

export default ForgotPassword;