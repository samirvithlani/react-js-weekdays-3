import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const ViewDoctors = () => {

    
    useEffect(() => {
      
        getAllDoctors();
      
    }, [])
    
    
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    await axios
      .get("http://localhost:8080/getalldoctors")
      .then((res) => {
        setDoctors(res.data);
        console.log(doctors)
      })
      .catch((err) => {});
  };

  const deleteDoctor = async(id) =>{

    await axios.delete("http://localhost:8080/deletedoctor/"+id).then(res=>{
    if(res.status ===204){
        alert("Doctor Deleted Successfully")
        getAllDoctors();
    }
    console.log(res)
    })
  }


  
  
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Exp</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
                doctors.map(doc=>{
                    return(
                        <tr>
                            <th scope="row">{doc.dId}</th>
                            <td>{doc.dName}</td>
                            <td>{doc.dAge}</td>
                            <td>{doc.dEmail}</td>
                            <td>{doc.dExp}</td>
                            <td><button onClick={()=>deleteDoctor(doc.dId)}>Delete</button>
                            <button>
                              <Link to={`/updatedoctor/${doc.dId}`}>Update</Link>
                            </button>
                            </td>
                            
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};
