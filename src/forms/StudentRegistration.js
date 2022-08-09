import React from "react";
import { useForm } from "react-hook-form";

export const StudentRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submit = (data) => {
    //alert(JSON.stringify(data.name));
    console.log(data);
  };
  const validationSchema = {
    name: { required: "Name is required" },

    age: {
      min: {
        value: 18,
        message: "Age must be greater than 18",
      },
    },
    phone: {
      required: "Phone is required",
      pattern: {
        value: /^[6-9]{1}[0-9]{9}$/,
        message: "Phone number is invalid...",
      },
    },
  };
  var countries = [
    {
        name: "India",
    },
    
    {
        name: "Uk",
    },
    
    {
        name: "USA",
    },
    
    {
        name: "Canada",
    }
  ]
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", validationSchema.name)}
          ></input>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            {...register("age", validationSchema.age)}
          ></input>
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            {...register("phone", validationSchema.phone)}
          ></input>
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div>
          <label>Gender</label>
          MALE
          <input
            type="radio"
            name="gender"
            value="male"
            {...register("gender")}
          ></input>
          FEMALE
          <input
            type="radio"
            name="gender"
            value="female"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label>Hobbies</label>
          TRAVLEING
          <input
            type="checkbox"
            name="hobbies"
            value="traveling"
            {...register("hobbies")}
          ></input>
          Reading
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            {...register("hobbies")}
          ></input>
          writing
          <input
            type="checkbox"
            name="hobbies"
            value="writing"
            {...register("hobbies")}
          ></input>
          <div>
            <label>Country</label>
            <select name="country" {...register("country")}>
            {
                    countries.map(country =>{
                        return <option value={country.name}>{country.name}</option>
                    })
            }
            </select>
          </div>
        </div>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};
