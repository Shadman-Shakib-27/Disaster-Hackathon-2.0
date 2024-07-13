import axios from "axios";
from app.models import WeatherData;
const api = axios.create({
  baseURL: "http://localhost:3000/api/", // Django backend URL
});

export const getYourModels = () => api.get("WeatherData/");
