import axios from "axios";

export const API_URL = "http://www.omdbapi.com/?apikey=516f988";

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
