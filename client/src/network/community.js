import axios from "axios";

const BASE_URL = "https://block-watch.herokuapp.com/api";

export async function getAllCommunities() {
    try {
        const response = await axios({
            method: "GET",
            url: `${BASE_URL}/communities`,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
        return response.data;
    } catch (e) {
        console.log("Error:", e);
    }
}

export async function addIncident(incident, token, id) {
    try {
        console.log("incident::: ", incident);
        const response = await axios({
            method: "POST",
            url: `${BASE_URL}/communites/${id}/posts`,
            data: incident,
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);

        return response.data;
    } catch (e) {
        console.log("Error", e);
    }
    try {
        const response = await axios({
            method: "GET",
            url: `${BASE_URL}/communities`,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
        return response.data;
    } catch (e) {
        console.log("Error:", e);
    }
}

export async function addCommunity(community, token) {
    try {
        const response = await axios({
            method: "POST",
            url: `${BASE_URL}/communities`,
            data: community,
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("Token>>>>> ", token);
        return response.data;
    } catch (e) {
        console.log("Error", e);
    }
}

export async function getUserCommunities(token) {
    try {
        const response = await axios({
            method: "GET",
            url: `${BASE_URL}/users/communities`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(
            "getUserCommunities response.data>>>>",
            response.data.user.communities
        );
        return response.data.user.communities;
    } catch (e) {
        console.log("Error:", e);
    }
}

export async function getCommunity({ id, token }) {
    try {
        const response = await axios({
            method: "GET",
            url: `${BASE_URL}/communities/${id}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("getCommunity response.data>>>>", response.data);
        return response.data;
    } catch (e) {
        console.log("Error:", e);
    }
}
