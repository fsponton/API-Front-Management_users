import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import deleteUser from '../services/deleteUser';
import ValidatePassword from '../utils/validatePassword';

const FormDeleteUser = (props: any) => {
    const { user, token, closeModal } = props

    return (
        <>
            <Formik
                initialValues={{
                    user,
                    token,
                    deleteChecked: false,
                }}
                onSubmit={async values => {
                    if (!values.deleteChecked) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Check for delete',
                        })
                        return
                    }

                    const password = await ValidatePassword()
                    if (!password) { return }

                    const form = {
                        token,
                        email: values.user.email,
                        password
                    }

                    const result = await deleteUser(form);
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
                        <h3 className='mb-5 text-uppercase'>Delete User</h3>
                        <div className='form-outline form-white mb-4'>
                            <label htmlFor='name' className='form-label'>
                                Name: {user.name}<br />
                                Email: {user.email}
                            </label>

                            <ErrorMessage name='name' component='div' className='text-danger' />
                        </div>

                        <div className='form-check mb-4'>
                            <Field type='checkbox' className='form-check-input' id='deleteChecked' name='deleteChecked' />
                            <label htmlFor='deleteChecked' className='form-check-label'>Delete this user</label>
                        </div>

                        <button className='btn btn-outline-light btn-lg px-5' type='submit'>
                            Delete
                        </button>

                    </div>
                </Form>
            </Formik >
        </>

    )
}

export default FormDeleteUser;