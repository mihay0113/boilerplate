import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().max(15, 'Must be 15 chars or less')
        .required('Should be provided'),
    sureName: Yup.string().max(20, 'Must be 20 chars or less')
        .required('Should be provided'),
    email: Yup.string().email('Should be a valid email')
        .required('Should be provided'),
    age: Yup.number().min(6, 'Must be more than 6 years old')
        .max(60, 'Must be less than 60 years old'),
    speciality: Yup.string().required('Should be provided')
        .oneOf([ 'designer', 'developer', 'writer' ], 'You should put a correct job'),
    sex: Yup.string()
        .required('Should be provided')
        .oneOf([ 'Female', 'Male' ], 'You should put a correct sex'),
});
