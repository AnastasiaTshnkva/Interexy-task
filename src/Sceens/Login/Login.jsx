import React, { useState } from 'react';
import { Form, Formik } from 'formik'
import FormikInput from 'Components/FormikInput';
import { REVIEW_LOGIN } from 'constants/reviews/reviewLogin';
import { FormControlLabel, Checkbox} from '@mui/material';

const Login = (props) => {
    const [newUserRegistration, setNewUserRegistration] = useState(false);

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
                    <h2 className={'login__title'}>{REVIEW_LOGIN.TITLE}</h2>
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
                    <button type={'submit'} className={'login__button'}>{!newUserRegistration ?
                        REVIEW_LOGIN.BUTTON_LOGIN_TITLE : REVIEW_LOGIN.BUTTON_SIGN_UP_TITLE}</button>
                </Form>
            </Formik>
        </div>
    )
};

export default Login;