import { Props } from '../types/types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import editUserSchema from '../utils/_yupSchemas/editUserSchema';
import updateUser from '../services/updateUser';
import Swal from 'sweetalert2';
import ValidatePassword from '../utils/validatePassword';

const FormEditUser = ({ user, token, closeModal }: Props) => {

    return (
        <>
            <Formik
                initialValues={{
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    active: user.active === true ? "yes" : "no",
                }}
                validationSchema={editUserSchema}
                onSubmit={async values => {
                    const password = await ValidatePassword()
                    if (!password) { return }
                    const form = {
                        token,
                        email: user.email,
                        name: values.name,
                        role: values.role,
                        active: values.active === "yes" ? true : false,
                        password
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
                            title: `${result.message}`
                        });
                    }
                }}
            >
                <Form className='card-body p-5 text-center'>
                    <div className='mb-md-5 mt-md-4 pb-5'>
                        <h3 className='mb-3 text-uppercase'>User Edition</h3>
                        <div className='form-outline form-white mb-4'>
                            <label htmlFor='name' className='form-label'>
                                Name: {user.name}
                            </label>
                            <Field className='form-control form-control-lg' id='name' name='name' />
                            <ErrorMessage name='name' component='div' className='text-danger' />
                        </div>

                        <div className='form-outline form-white mb-4'>
                            <label htmlFor='role' className='form-label'>
                                Role: {user.role}
                            </label>
                            <Field as="select" className='form-control form-control-lg' id='role' name='role'>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </Field>
                            <ErrorMessage name='role' component='div' className='text-danger' />
                        </div>

                        <div className='form-outline form-white mb-4'>
                            <label className='form-label' htmlFor='active'>
                                Active: {user.active === true ? "true" : "false"}
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