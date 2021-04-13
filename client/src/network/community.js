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

// const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0OTJlZjVkNWNiZmFhMmI4YjY0MDQiLCJlbWFpbCI6ImthbEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJLYWwiLCJsYXN0TmFtZSI6IlRhbmciLCJpYXQiOjE2MTgyOTQ2OTYsImV4cCI6MS4wMDAwMDAwMDAwMDAwMTZlKzIzfQ.5Z-8H86WXU3u0FUQex0SKVQ0faXRLjs6-JZFyu8eShQ'

export async function addCommunity({ community }) {
    try {
        const token = await axios({
            method: 'POST',
            url: `${BASE_URL}/communities`,
            body: community,
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        console.log('Token >>>>', token);
        return token.data;
    } catch (e) {
        console.log('Error', e);
    }
}
