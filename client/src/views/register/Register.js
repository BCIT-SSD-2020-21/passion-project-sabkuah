import React, { useEffect, useState } from 'react';
import { registerUser } from '../../network/user';
import RegisterScreen from './RegisterScreen';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const Register = ({ token, setToken }) => {
  const [, setUser] = useState({});
  const history = useHistory();

  const handleRegister = async (user) => {
    try {
      const response = await registerUser(user);
      if (response.error) {
        alert(response.error);
        return;
      }
      if (response.accessToken) {
        setToken(response.accessToken);
        alert('Successfully registered user!');
        history.push('/user/communities');
      }
    } catch (e) {
      console.log('Error registering user:', e);
    }
  };

  useEffect(() => {
    const decodedUser = token ? jwtDecode(token) : null;
    setUser(decodedUser);
    console.log('decoded user>>>', decodedUser);
  }, [token]);

  return <RegisterScreen handleRegister={handleRegister} />;
};

export default Register;
