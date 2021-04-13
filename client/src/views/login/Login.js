import React, { useState, useEffect } from 'react';
import { loginUser } from '../../network/user';
import LoginScreen from './LoginScreen';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const Login = ({ token, setToken }) => {
  // const [token, setToken] = useLocalStorage('token', '');
  const [, setUser] = useState({});
  const history = useHistory();

  const handleLogin = async (user) => {
    try {
      const accessToken = await loginUser(user);
      if (accessToken) {
        setToken(accessToken);
        alert('Successfully logged in!');
        history.push('/user/communities');
      }
    } catch (e) {
      console.log('Error logging in: ', e);
    }
  };

  useEffect(() => {
    const decodedUser = token ? jwtDecode(token) : null;
    setUser(decodedUser);
    console.log('decoded user>>>', decodedUser);
  }, [token]);

  return <LoginScreen handleLogin={handleLogin} />;
};

export default Login;
