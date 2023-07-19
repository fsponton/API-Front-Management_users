import * as Yup from 'yup';

export default Yup.object().shape({
    token: Yup.string(),
    email: Yup.string().email(),
    name: Yup.string(),
    role: Yup.string(),
    active: Yup.string()
})
