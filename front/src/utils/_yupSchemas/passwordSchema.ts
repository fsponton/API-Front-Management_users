import * as Yup from 'yup';

export default Yup.object().shape({
    password: Yup.string()
        .required('Required')
        .min(7, 'Password must be at least 8 characters long')
});


