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
