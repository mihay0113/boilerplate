import React from 'react';
import { Label } from './styles';
import { useField } from 'formik';

export const MyCheckbox = ({ children, ...props }: any)=>{
    const [ field, meta ] = useField({ ...props });

    return (
        <>
            <Label className = 'checkbox'>
                <input
                    { ...field }
                    { ...props }
                    type = 'checkbox'
                />
                {children}
            </Label>
            {meta.touched && meta.error && (<div className = 'error'>{meta.error}</div>)}
        </>
    );
};
