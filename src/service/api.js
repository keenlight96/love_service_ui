import axios from "axios";

const customAxios = axios.create({
    baseURL: "http://45.117.179.204:8080/"
})
export default customAxios;