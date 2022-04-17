import React, { useState } from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-form py-3'>
            <h2 style={{ textAlign: 'center' }}>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Email Address' required />

                <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Password' required />

                <input className='w-50 mx-auto btn btn-success mt-2'
                    type="submit"
                    value="Login" />
            </form>
            <p>New User? <Link to="/signup" className='text-info pe-auto text-decoration-none' >Please Sign Up</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;