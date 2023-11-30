import axios from "axios";

export const api =   axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: '8e3cbb12e487488187720840230510'
  }
})