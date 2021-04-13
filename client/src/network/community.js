import axios from 'axios';

const BASE_URL = 'https://block-watch.herokuapp.com/api';

export async function getAllCommunities() {
    try {
        const response = await axios({
            method: 'GET',
            url: `${BASE_URL}/communities`,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
        return response.data;
    } catch (e) {
        console.log('Error:', e);
    }
}

export async function addCommunity(community, token) {
    try {
        const response = await axios({
            method: 'POST',
            url: `${BASE_URL}/communities`,
            data: community,
            headers: {
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Token>>>>> ', token);
        return response.data;
    } catch (e) {
        console.log('Error', e);
    }
}

export async function getUserCommunities(token) {
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1ZWZkYjMwNTBkYzAwMTU5ZDkzMTAiLCJlbWFpbCI6ImxvbDFAbG9sLmNvbSIsImZpcnN0TmFtZSI6IlBlZHJvIiwibGFzdE5hbWUiOiJHb256YWxlcyIsImlhdCI6MTYxODM0MTg1MiwiZXhwIjoxLjAwMDAwMDAwMDAwMDAxNmUrMjN9.5M8QZZ2uTAaun36UviSCzYhYfYGoPFf5rcrmnVPKMBQ';

  try {
    const response = await axios({
      method: 'GET',
      url: `${BASE_URL}/users/communities`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(
      'getUserCommunities response.data>>>>',
      response.data.user.communities
    );
    return response.data.user.communities;
  } catch (e) {
    console.log('Error:', e);
  }
}
