import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Form, Button } from 'semantic-ui-react';
import YekTextInput from '../utilities/costumFromControls/YekTextInput';
import CityService from '../services/cityService';

export default function CityAdd() {
    const initialValues = { cityName: '' };

    const schema = Yup.object().shape({
        cityName: Yup.string().required("City Name can't be null")
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const cityService = new CityService();
        cityService.addCity(values)
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
                        <YekTextInput name="cityName" placeholder='City Name' />

                        <Button type="submit" color="green" disabled={isSubmitting}>
                            Add City
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
