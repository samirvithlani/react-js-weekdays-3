import axios from "axios";
import React, { useState } from "react";

export const UserApi = () => {
  var name;
  const [loader, setloader] = useState("");

  const getApiData = async () => {
    setloader("loading....");
    await axios.get("https://reqres.in/api/users?delay=3").then((res) => {
      name = res.data.data[0].first_name;
    });
    setloader("");
  };
  const addApiData = () => {
    var data = {
      name: "sachi",
      job: "cricketer",
    };
    axios.post("https://reqres.in/api/users", data).then((res) => {
      console.log(res.data);
    });
  };
  const deletData = () => {
    axios.delete("https://reqres.in/api/users/2").then((res) => {
      if (res.status === 204) {
        alert("deleted");
      }
    });
  };
  const updateData = () => {
    var updateData = {
      name: "ram",
      job: "cricketer",
    };
    axios.put("https://reqres.in/api/users/2", updateData).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <button onClick={getApiData}>Get Api Data</button>
      {loader}
      
      <button onClick={addApiData}>Add Api Data</button>
      <button onClick={deletData}>Delete Api Data</button>
      <button onClick={updateData}>Update Api Data</button>
    </div>
  );
};
