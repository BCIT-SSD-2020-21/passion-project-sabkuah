import axios from 'axios';

const BASE_URL = 'https://block-watch.herokuapp.com/api';

export async function registerUser(user) {
  const newUser = {
    email: user.email,
    username: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.location,
    password: user.password,
  };
  console.log(`Register User >>`, newUser);
  try {
    const token = await axios({
      method: 'POST',
      url: `${BASE_URL}/users/register`,
      data: newUser,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log('TOKEN', token);

    return token.data.accessToken;
  } catch (e) {
    console.log('error', e);
  }
}
