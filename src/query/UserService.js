import axios from "axios";
import {useQuery} from "react-query";

function fetchUserData (){

    return axios.get("http://localhost:8080/tutorial")

}

export const  useFetchData = () =>{

    return useQuery("users",fetchUserData,{
        retryOnMount:false,
        enabled:false,
        retry:4,
        retryDelay:5000,

    });

}