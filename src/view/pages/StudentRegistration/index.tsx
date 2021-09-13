import React from 'react';
import { Formik, Form } from 'formik';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

import { MyInput } from '../../elements/formElements/myInput';
import { MySelect } from '../../elements/formElements/mySelect';
import styled from 'styled-components';

type InfoTypes = {
    age: number,
    email: string,
    firstName: string,
    sex: string,
    speciality: string,
    sureName: string,
}

export const printInfo = (values: InfoTypes) => {
    console.log(values);
};

const Section = styled.section`
  margin: auto;
`;

const H1 = styled.h1`
  font-size: 32px;
`;

export const StudentRegistration = () => (
    <Section>
        <H1>Subscribe</H1>
        <Formik
            initialValues = { initialValues }
            validationSchema = { validationSchema }
            onSubmit = { printInfo }>
            <Form>
                <MyInput
                    label = 'First name:'
                    name = 'firstName'
                    placeholder = 'Put your first name here'
                    type = 'text'
                />
                <MyInput
                    label = 'Surename:'
                    name = 'sureName'
                    placeholder = 'Put your surename here'
                    type = 'text'
                />
                <MyInput
                    label = 'Age:'
                    name = 'age'
                    placeholder = 'Put your age here'
                    type = 'number'
                />
                <MyInput
                    label = 'Email:'
                    name = 'email'
                    placeholder = 'Put your email here'
                    type = 'email'
                />
                <MyInput
                    name = 'sex'
                    radioTitle = 'Sex:'
                    type = 'radio'
                    value = 'Male'
                />
                <MyInput
                    name = 'sex'
                    type = 'radio'
                    value = 'Female'
                />
                <MySelect
                    label = 'Speciality:'
                    name = 'speciality'>
                    <option
                        disabled
                        value = ''>Select a job
                    </option>
                    <option value = 'designer'>designer</option>
                    <option value = 'developer'>developer</option>
                    <option value = 'writer'>writer</option>
                </MySelect>
                <button type = 'submit'>Submit</button>
            </Form>
        </Formik>
    </Section>
);
