import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const UpdateDoctor = () => {
  var uId = useParams().id;
  const [doctor, setdoctor] = useState({});
  var {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = async () => {
    await axios
      .get("http://localhost:8080/getdoctor/" + uId)
      .then((res) => {
        setdoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = async (data) => {
    console.log(data);
    var x = "record updated..."
    await axios
      .put("http://localhost:8080/updatedoctor/" + uId, data)
      .then((res) => {
        if (res.status === 201) {
            toast.info(x, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Doctor Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Name"
            {...register("dName")}
            defaultValue={doctor.dName}
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
            defaultValue={doctor.dExp}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Doctor Age</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Age"
            {...register("dAge")}
            defaultValue={doctor.dAge}
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
            defaultValue={doctor.dEmail}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
