import React from 'react';
import { useField } from 'formik';
import { Label } from './styles';

export const MySelect = ({ label, ...props }: any)=>{
    const [ field, meta ] = useField({ ...props });

    return (
        <>
            <Label>{label}
                <select
                    { ...field }
                    { ...props }
                />
            </Label>
            {meta.touched && meta.error && (<div className = 'error'>{meta.error}</div>)}
        </>
    );
};
