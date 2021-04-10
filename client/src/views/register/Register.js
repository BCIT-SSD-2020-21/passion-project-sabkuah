import React, { useState } from 'react';
import User from '../../layouts/User';
import RegisterScreen from './RegisterScreen';

const Register = () => {
  const [errorMsgs, setErrorMsgs] = useState([]);
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
  });
  //========================
  // Handle errors function=
  //========================
  const handleErrors = () => {
    let tempArr = [];

    //Email Validation
    let email = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!email.test(user.email)) {
      tempArr.push('Please enter a valid email address');
    }

    //Password length validation;
    if (user.password.length < 8) {
      tempArr.push('Password needs to be a minimum of 8 characters');
    }

    // Password Uppercase validation
    let upperCase = new RegExp(/^(?=.*[A-Z])/);
    if (!upperCase.test(user.password)) {
      tempArr.push('Password needs an UPPERCASE letter');
    }

    // Password Lowercase validation
    let lowerCase = new RegExp(/^(?=.*[a-z])/);
    if (!lowerCase.test(user.password)) {
      tempArr.push('Password needs an lowercase letter');
    }
    //Password Number validation
    let digits = new RegExp(/^(?=.*[0-9])/);
    if (!digits.test(user.password)) {
      tempArr.push('Password needs to include a number');
    }
    //Password Special character validaton
    let special = new RegExp(/^(?=.*?[#?!@$%^&*-])/);
    if (!special.test(user.password)) {
      tempArr.push('Password needs to include a special character');
    }

    //Password match validation
    if (user.password !== user.confirmPassword) {
      tempArr.push('Password & Confirm Password does not match');
    }

    // Location Validation
    if (user.location.length === 0) {
      tempArr.push('Location is required');
    }

    return tempArr;
  };

  //Register form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check user input errors before database
    const errors = handleErrors();

    if (errors.length > 0) {
      setErrorMsgs(errors);

      // Auto Scrolls to top if there are error(s)
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      return;
    } else {
      setErrorMsgs([]);
    }

    // Server registration
  };
  return (
    <RegisterScreen
      handleSubmit={handleSubmit}
      errorMsgs={errorMsgs}
      user={User}
      setUser={setUser}
    />
  );
};

export default Register;
