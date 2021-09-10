import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

import { Label } from './styles';

const Input = styled.input`
    margin: 0 0 0 15px;
`;

const H1 = styled.h1`
    font-weight: bold;
    margin: 10px;
`;

export const MyInput = ({ label, radioTitle, ...props }: any) => {
    const [ field, meta ] = useField({ ...props });

    return (
        <>
            <H1>{radioTitle}</H1>
            <Label>{label}
                <Input
                    { ...field }
                    { ...props }
                />
                {props.type === 'radio' ? <span>{props.value}</span> : true}
            </Label>
            {meta.touched && meta.error && (<div className = 'error'>{meta.error}</div>)}
        </>
    );
};
