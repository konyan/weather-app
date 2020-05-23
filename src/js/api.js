import axios from "axios";

const key = "da6c840b7ddc60d78c05ab45f9f4761b";

export const apiPosition = async (lat, lon) => {
  let api = "https://fcc-weather-api.glitch.me/api/current?";
  const response = await axios.get(`${api + lat}&${lon}`);
  return response;
};

export const apiCity = async (city) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da6c840b7ddc60d78c05ab45f9f4761b`;
  console.log("URL", url);
  const response = await axios.get(url);
  return response;
};
