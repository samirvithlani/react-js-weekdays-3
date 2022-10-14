import axios from "axios";
import {useMutation, useQuery} from "react-query";
import {useNavigate} from "react-router-dom";


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

function addTutorial(tutorial){

    return axios.post("https://tutorialapi1.herokuapp.com/tutorial",tutorial)    
}

export const useAddTutorial = () =>{
    const navigate = useNavigate();

    return useMutation(addTutorial,{
        onSuccess:(data,variable,context)=>{
            console.log(data);
            console.log("success")
            navigate("/")
        },
        onError:()=>{

            console.log("error")
        }
    })
}