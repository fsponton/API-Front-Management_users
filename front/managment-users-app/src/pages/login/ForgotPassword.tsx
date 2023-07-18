import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from "sweetalert2";
import emailSchema from './_yupSchemas/emailSchema';
import forgotPassword from '../../services/forgotPassword';
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';




const ForgotPassword = () => {
    const navigate = useNavigate()

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'black' }}>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ border: "border-radius: 2rem" }}>
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
                                        title: `Email: ${values.email} does not exist in the database`
                                    })
                                }}
                            >
                                <Form className='card-body p-5 text-center'>
                                    <div className='mb-md-5 mt-md-4 pb-5'>
                                        <h3 className="mb-5 text-uppercase">Forgot Password</h3>

                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor='email' className="form-label">Email:</label>
                                            <Field className="form-control form-control-lg" id="email" name="email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>

                                    </div>
                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Submit</button>
                                    <p className="mb-0 mt-4">
                                        <a href="/" className="text-white-50 fw-bold">Back to Login</a>
                                    </p>

                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ForgotPassword;

// const ForgotPassword = () => {
//     const navigate = useNavigate()

//     return (
//         <div className='col d-flex justify-content-center' >
//             <Formik
//                 initialValues={{
//                     email: '',
//                 }}
//                 validationSchema={emailSchema}
//                 onSubmit={async values => {
//                     const result = await forgotPassword(values)
//                     if (result.status === "success") {
//                         Swal.fire({
//                             icon: 'success',
//                             title: `An email was sent to ${values.email}`
//                         })
//                         navigate("/")
//                         return
//                     }
//                     Swal.fire({
//                         icon: 'error',
//                         title: `Email: ${values.email} no exist's on database's`
//                     })
//                 }}
//             >
//                 <Form>
//                     <label htmlFor='email'>Email:</label>
//                     <Field id="email" name="email" />
//                     <ErrorMessage name="email" component="div" />

//                     <button type="submit">Submit</button>
//                 </Form>

//             </Formik >
//         </div >
//     )
// }

// export default ForgotPassword;