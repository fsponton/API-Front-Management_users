import * as Yup from 'yup';

export default Yup.object().shape({
    password: Yup.string()
        .required('Required'),
});
