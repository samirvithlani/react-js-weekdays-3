import axios from "axios";
import React, { useState } from "react";

export const RapiApi = () => {
  const [weather, setweather] = useState("");
  const [flag, setflag] = useState(false);

  const getWeather = async () => {
    await axios
      .get("https://aerisweather1.p.rapidapi.com/observations/mumbai,india", {
        headers: {
          "X-RapidAPI-Key":
            "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
          "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
        },
      })
      .then((res) => {
        
          setweather(res.data);
          //console.log(weather)
          setflag(true);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(weather);
  return (
    <div>
        <button onClick={getWeather}>Get Weather</button>  
            {
                weather  ?<h1>{weather.response.place.name}</h1> : null
            }
        
      
      
    </div>
  );
};
