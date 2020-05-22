import axios from "axios";

export default async (lat, lon) => {
  const api = "https://fcc-weather-api.glitch.me/api/current?";
  const response = await axios.get(`${api + lat}&${lon}`);
  return response;
};
