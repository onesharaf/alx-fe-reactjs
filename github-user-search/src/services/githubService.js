import axios from "axios";

const BASE_URL = 'https://api.github.com/users/{username}'
const API_KEY = 'https://api.github.com/search/users?q={query}'


export const fetchUserData = async (username) => {
  try{
    const response = await axios.get(
      `${BASE_URL}/users/${username}`,
       {
          headers: API_KEY
            ? { Authorization: `token ${API_KEY}` }
            : {},
       }
    );

    return response.data;
  } catch (error) {

    throw error;
  }
};

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) {
      query += `${username}`;
    }

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query}`,
      {
        headers: API_KEY
          ? { Authorization: `token ${API_KEY}` }
          : {},
      }
    );

    return response.data.items;
  } catch (error) {
    throw error;
  }
};