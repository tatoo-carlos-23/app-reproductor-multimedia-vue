import axios from 'axios';
import { URL_API, HEADERS } from "./url_api";

class api_reproductor {

    login(data) { 
        return axios.post(`${URL_API}/api/acceso/login`, data, HEADERS)
    }

}

export default new api_reproductor()