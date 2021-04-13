import React, { useState, useEffect } from 'react';
import { loginUser } from '../../network/network';
import LoginScreen from './LoginScreen';
import useLocalStorage from 'react-use-localstorage';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [token, setToken] = useLocalStorage('token', '');
  const [user, setUser] = useState({});
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
