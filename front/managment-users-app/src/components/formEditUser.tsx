import { EditUser } from '../types/types'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const FormEditUser = (props: EditUser) => {
    const { userEdit } = props

    const [input, setInput] = useState({
        id: userEdit.id,
        name: userEdit.name,
        email: userEdit.email,
        role: userEdit.role,
        active: userEdit.active
    })


    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    console.log("active????", userEdit.active)

    return (
        <>
            <Formik
                initialValues={{
                    name: input.name,
                    role: input.role,
                    active: input.active,
                }}
                // validationSchema={ }
                onSubmit={async values => {
                    const result = await (values);
                    if (result === 'success') {
                        // Swal.fire({
                        //     icon: 'success',
                        //     title: `Hi ${result.msg}`,
                        // });
                        // sessionStorage.setItem('token', JSON.stringify(result.token));
                        // navigate('/dashboard');
                    } else {
                        // Swal.fire({
                        //     icon: 'error',
                        //     title: 'Email or password not found',
                        //     text: 'Check info',
                        // });
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
                            <Field className='form-control form-control-lg' id='name' name='name' value={input.name} onChange={handlerChange} />
                            <ErrorMessage name='name' component='div' className='text-danger' />
                        </div>

                        <div className='form-outline form-white mb-4'>
                            <label htmlFor='role' className='form-label'>
                                Role: {userEdit.role}
                            </label>
                            <Field as="select" className='form-control form-control-lg' id='role' name='role' value={input.role} onChange={handlerChange}>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </Field>
                            <ErrorMessage name='role' component='div' className='text-danger' />
                        </div>

                        <div className='form-outline form-white mb-4'>
                            <label className='form-label' htmlFor='active'>
                                Active: {userEdit.active === true ? "yes" : "no"}
                            </label>
                            <Field as="select" className='form-control form-control-lg' id='active' name='active'  >
                                <option value="user">yes</option>
                                <option value="admin">no</option>
                            </Field>
                            <ErrorMessage name='active' component='div' className='text-danger' />
                        </div>

                        <button className='btn btn-outline-light btn-lg px-5' type='submit'>
                            Update
                        </button>

                    </div>
                </Form>
            </Formik >
            <div><p>{userEdit.id}</p></div>
        </>
    )
}

export default FormEditUser;