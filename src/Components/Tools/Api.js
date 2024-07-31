import axios from "axios";

export const Api = (api,method,data,header = {})=>{
    let promise;
    switch(method){
        case "get":
            promise = axios.get(api,{headers : header});
        case "post":
            promise = axios.post(api,data,{headers : header});
        case "put":
            promise = axios.put(api,data,{headers : header});
        case "delete":
            promise = axios.delete(api,{headers : header});
        default:
            promise = Promise.reject(new Error("Invalid method"));
    }
    return promise;
}