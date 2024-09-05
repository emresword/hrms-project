import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Form, Button } from 'semantic-ui-react';
import YekTextInput from '../utilities/costumFromControls/YekTextInput';
import JobTitleService from '../services/jobTitleService';

export default function JobTitleAdd() {
    const initialValues = { title: '' };

    const schema = Yup.object().shape({
        title: Yup.string().required("Job Title can't be null")
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const jobTitleService = new JobTitleService();
        jobTitleService.addJobTitle(values)
            .then(response => {
                console.log(response.data);
                // Handle successful response, e.g., show a success message or redirect
                resetForm(); // Optional: Reset form after successful submission
            })
            .catch(error => {
                console.error(error);
                // Handle error, e.g., show an error message
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, isSubmitting }) => (
                    <Form className='ui form' onSubmit={handleSubmit}>
                        <YekTextInput name="title" placeholder='Job Title' />

                        <Button type="submit" color="green" disabled={isSubmitting}>
                            Add JobTitle
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
