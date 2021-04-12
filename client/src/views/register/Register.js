import React from 'react';
import { registerUser } from '../../network/network';
import RegisterScreen from './RegisterScreen';

const Register = () => {
  //Register form submit
  const handleSubmit = async (user) => {
    console.log('USER', user);

    // Server registration
    const newUser = await registerUser(user);
    //console.log('New User >>', newUser);
  };
  return <RegisterScreen handleSubmit={handleSubmit} />;
};

export default Register;
