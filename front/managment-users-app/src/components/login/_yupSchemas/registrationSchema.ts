import * as Yup from 'yup';

export default Yup.object().shape({
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 characters long')
});
