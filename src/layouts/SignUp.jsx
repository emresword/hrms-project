import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Form, Button, Segment, Header, Icon } from 'semantic-ui-react';
import YekTextInput from '../utilities/costumFromControls/YekTextInput';

export default function SignUp() {

    const initialValues = { email: "", password: "", confirmPassword: "" };
    const schema = Yup.object({
        email: Yup.string().required("Email can't be null").email("Invalid email format"),
        password: Yup.string().required("Password can't be null").min(6, "Password must be at least 6 characters"),
        confirmPassword: Yup.string()
            .required("Please confirm your password")
            .oneOf([Yup.ref('password'), null], "Passwords must match")
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
            <Segment padded="very" style={{ maxWidth: 400, width: '100%' }}>
                <Header as="h2" textAlign="center">
                    <Icon name="signup" />
                    Sign Up
                </Header>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form className='ui form' onSubmit={handleSubmit}>
                            <YekTextInput 
                                name="email"
                                placeholder='Email'
                                icon="mail"
                            />
                            <YekTextInput 
                                name="password"
                                placeholder='Password'
                                type='password'
                                icon="lock"
                            />
                            <YekTextInput 
                                name="confirmPassword"
                                placeholder='Confirm Password'
                                type='password'
                                icon="lock"
                            />
                            <Button color='blue' fluid type='submit'>Sign Up</Button>
                        </Form>
                    )}
                </Formik>
            </Segment>
        </div>
    );
}
