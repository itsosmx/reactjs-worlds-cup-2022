import axios from 'axios';
import standings from './standings.json'
import matches from './matches.json'

const END_POINT = "https://api.football-data.org/v4"

export async function getStandings() {
  try {
    const response = await axios.get(`${END_POINT}/competitions/2000/standings`, {
      headers: {
        "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
      }
    }).catch(console.error);
    return response?.data || standings;
  } catch (error) {
    console.error(error);
  }
}
export async function getMatches() {
  try {
    const response = await axios.get(`${END_POINT}/competitions/2000/standings`, {
      headers: {
        "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
      }
    }).catch(console.error);
    return response?.data || matches;
  } catch (error) {
    console.error(error);
  }
}