import axios from "axios";

const Axios = axios.create({
  baseURL: "https://artcurate-backend.herokuapp.com",
  //baseURL : "localhost:3000"
});

export default Axios;
