import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { AppContext } from "../contextdemo/context";

export const RegisterDoctor = () => {
  var {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {student,setst}= useContext(AppContext);
  console.log(student);

  const submit = async(data)=>{
    console.log(data);
    await axios.post("http://localhost:8080/adddoctor",data).then(res=>{

        if(res.status===201){
          alert("Doctor Registered Successfully")
        }

    }).catch(err=>{
        console.log(err);
    })
  }

var naem = "sample"

  return (
    <div>
      <form onSubmit = {handleSubmit(submit)}>
      <div class="form-group">
          <label for="exampleInputEmail1">Doctor Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Name"
            {...register("dName")}
            
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Doctor Exp</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Exp"
            {...register("dExp")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Doctor Age</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Age"
            {...register("dAge")}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("dEmail")}
          />
  
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
