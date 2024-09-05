import { useField } from 'formik';
import React from 'react';
import { FormField, Input, Label } from 'semantic-ui-react';

const YekTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label pointing color="red">
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
};

export default YekTextInput;
