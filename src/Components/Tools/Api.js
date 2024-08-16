import axios from "axios";
import { useSelector } from "react-redux";

export const Api = (api,method,data)=>{
    const token = useSelector(state=>state.authentication.token);
    const header = token != null ? {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        } : {};
    let promise;
    switch(method){
        case "get":
            promise = axios.get(api,{headers : header});
            break;
        case "post":
            promise = axios.post(api,data,{headers : header});
            break;
        case "put":
            promise = axios.put(api,data,{headers : header});
            break;
        case "delete":
            promise = axios.delete(api,{headers : header});
            break;
        default:
            promise = Promise.reject(new Error("Invalid method"));
            break;
    }
    return promise;
}