import React from 'react';
import { Form, Formik } from 'formik'
import FormikInput from "../../Components/FormikInput";

const Login = (props) => {
    return (
        <div className={'login'}>
            <Formik className={'login-box'}>
                <Form>
                    <h2>Login Page</h2>
                    <FormikInput type={'text'} name={'name'} placeholder={'user name'}/>
                </Form>
            </Formik>
        </div>
    )
};

export default Login;