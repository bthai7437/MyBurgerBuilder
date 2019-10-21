import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-4d5c8.firebaseio.com/"
});

export default instance;
