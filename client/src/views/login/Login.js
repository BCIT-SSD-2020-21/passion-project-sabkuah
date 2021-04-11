import React from 'react';
import LoginScreen from './LoginScreen';

const Login = () => {
    const handleLogin = async (e) => {
        e.preventDefault();

        // back end error handling
    };
    return <LoginScreen handleLogin={handleLogin} />;
};

export default Login;
