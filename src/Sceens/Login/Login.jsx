import React, { useState } from 'react';
import { Form, Formik } from 'formik'
import FormikInput from 'Components/FormikInput';
import { REVIEW_LOGIN } from 'constants/reviews/reviewLogin';
import { FormControlLabel, Checkbox} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const [newUserRegistration, setNewUserRegistration] = useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementsByName('email')[0].value;
        const password = document.getElementsByName('password')[0].value;

        navigate('/');

        // if (!newUserRegistration) {
        //     const user = {
        //         email,
        //         password,
        //     }
        //     navigate('/');
        // }
    };

    const validate = () => {

    };

    const handleRedirectUser = () => {
        if(!newUserRegistration) {
            setNewUserRegistration(true);
        }
        if(newUserRegistration) {
            setNewUserRegistration(false);
        }
    };

    return (
        <div className={'login'}>
            <Formik>
                <Form className={'login-box'}>
                    <h2 className={'login__title'}>{!newUserRegistration ? REVIEW_LOGIN.LOGIN_TITLE : REVIEW_LOGIN.REGISTRATION_TITLE}</h2>
                    {newUserRegistration &&
                        <FormikInput type={'text'} name={'name'} placeholder={'user name'}/>
                    }
                    <FormikInput type={'email'} name={'email'} placeholder={'user email'}/>
                    <FormikInput type={'password'} name={'password'} placeholder={'user password'}/>
                    <FormControlLabel control={<Checkbox defaultChecked color='default'/>} label={REVIEW_LOGIN.CHECKBOX} />
                    <p className={'login__text'} onClick={() => {
                        handleRedirectUser()
                    }}>{!newUserRegistration ?
                        REVIEW_LOGIN.LINK_TO_SIGH_UP : REVIEW_LOGIN.LINK_TO_LOGIN}</p>
                    <button type={'submit'} className={'login__button'} onSubmit={handleOnSubmit}>{!newUserRegistration ?
                        REVIEW_LOGIN.BUTTON_LOGIN_TITLE : REVIEW_LOGIN.BUTTON_SIGN_UP_TITLE}</button>
                </Form>
            </Formik>
        </div>
    )
};

export default Login;