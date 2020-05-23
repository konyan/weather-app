import axios from "axios";

const key = "da6c840b7ddc60d78c05ab45f9f4761b";

export default async (lat, lon) => {
  const api = "https://fcc-weather-api.glitch.me/api/current?";
  const response = await axios.get(`${api + lat}&${lon}`);
  return response;
};

// api.openweathermap.org/data/2.5/weather?q="myanmar"&appid="da6c840b7ddc60d78c05ab45f9f4761b"
