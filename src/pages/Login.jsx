import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Form, Button, Segment, Header, Icon } from 'semantic-ui-react';
import YekTextInput from '../utilities/costumFromControls/YekTextInput';

export default function Login() {

    const initialValues = { email: "", password: "" };
    const schema = Yup.object({
        email: Yup.string().required("Email can't be null").email("Invalid email format"),
        password: Yup.string().required("Password can't be null")
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
            <Segment padded="very" style={{ maxWidth: 400, width: '100%' }}>
                <Header as="h2" textAlign="center">
                    <Icon name="sign-in" />
                    Log In
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
                            <Button color='green' fluid type='submit'>Log In</Button>
                        </Form>
                    )}
                </Formik>
            </Segment>
        </div>
    );
}
