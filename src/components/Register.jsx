import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('please enter your name'),
    lastName: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('please enter your name'),
    email: Yup.string()
        .email('Invalid email')
        .required('please enter your email')
        .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,),
    password: Yup.string()
        .required('please enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,}$)/,
            'must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, and one special character'
        )
})
export const Register = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ values, errors, touched, handleSubmit, handleChange , isValid }) => (
                <Form>
                    <label>firstName</label>
                    <Field name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange} />
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}
                    <label>lastName</label>
                    <Field name="lastName" value={values.lasttName} onChange={handleChange} />
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" type="email" value={values.email} onChange={handleChange} />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <Field name="password" type="password" value={values.password} onChange={handleChange} />
                    {errors.password && touched.password ? <div>{errors.password}</div> : null}
                    
                    <button onClick={handleSubmit} type="submit" disabled={!isValid} >Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);