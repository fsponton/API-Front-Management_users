import { EditUser } from '../types/types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import editUserSchema from '../utils/_yupSchemas/editUserSchema';
import updateUser from '../services/updateUser';
import Swal from 'sweetalert2';

const FormEditUser = (props: EditUser) => {
    const { userEdit, token, closeModal } = props

    return (
        <>
            <Formik
                initialValues={{
                    email: userEdit.email,
                    name: userEdit.name,
                    role: userEdit.role,
                    active: userEdit.active === true ? "yes" : "no",
                }}
                validationSchema={editUserSchema}
                onSubmit={async values => {
                    const form = {
                        token,
                        email: userEdit.email,
                        name: values.name,
                        role: values.role,
                        active: values.active === "yes" ? true : false
                    }
                    const result = await updateUser(form);
                    if (result.status === 'success') {
                        Swal.fire({
                            icon: 'success',
                            title: ` ${result.msg}`,
                        });
                        closeModal()
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: `${result.msg}`
                        });
                    }
                }}
            >
                <Form className='card-body p-5 text-center'>
                    <div className='mb-md-5 mt-md-4 pb-5'>
                        <h3 className='mb-5 text-uppercase'>User Edition</h3>
                        <div className='form-outline form-white mb-4'>
                            <label htmlFor='name' className='form-label'>
                                Name: {userEdit.name}
                            </label>
                            <Field className='form-control form-control-lg' id='name' name='name' />
                            <ErrorMessage name='name' component='div' className='text-danger' />
                        </div>

                        <div className='form-outline form-white mb-4'>
                            <label htmlFor='role' className='form-label'>
                                Role: {userEdit.role}
                            </label>
                            <Field as="select" className='form-control form-control-lg' id='role' name='role'>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </Field>
                            <ErrorMessage name='role' component='div' className='text-danger' />
                        </div>

                        <div className='form-outline form-white mb-4'>
                            <label className='form-label' htmlFor='active'>
                                Active: {userEdit.active === true ? "true" : "false"}
                            </label>
                            <Field as="select" className='form-control form-control-lg' id='active' name='active'>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
                            </Field>
                            <ErrorMessage name='active' component='div' className='text-danger' />
                        </div>

                        <button className='btn btn-outline-light btn-lg px-5' type='submit'>
                            Update
                        </button>

                    </div>
                </Form>
            </Formik >
        </>
    )
}

export default FormEditUser;