import axios from "axios";
import store from "./Store";

const jwtAxios = axios.create();

//request interceptor = action we do in any request
jwtAxios.interceptors.request.use(request => {
    request.headers = {
        "authorization": "Bearer " + store.getState().authState.user?.token
    }

    return request;
})

export default jwtAxios;